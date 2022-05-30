import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { Box } from 'native-base';
import Data from '../../data/Data';
import { colors } from 'theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider,VStack,HStack,Progress } from 'native-base';


const Gra = ({ route, navigation }) => {

    const allQuestions = Data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            setScore(score+1)
        }
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }
    function getRandom(min, max) {
        min = Math.ceil(1);
        max = Math.floor(11);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        
    }

    const renderQuestion = () => {
        return (
            <NativeBaseProvider>
            
                {/* Licznik pytan */}
            <View>
                <HStack>
                    <VStack>
                <Text style={{color: colors.orange, fontSize: 30}}>
                    Punkty:
                </Text>
                <Text style={{color: colors.green, fontSize: 30}}>{score}</Text>
                </VStack>
                <VStack marginLeft={150}>
                <Text style={{color: colors.orange, fontSize: 30,  marginRight: 2}}>
                    Pytanie:
                </Text>
                <HStack>
                <Text style={{color: colors.green, fontSize: 30, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                <Text style={{color: colors.red, fontSize: 20, opacity: 0.6,marginTop:10}}>/ {allQuestions.length}</Text>
                </HStack>
                </VStack>
                </HStack>
                <Text style={{color: colors.orange, fontSize: 30,  marginRight: 2,marginBottom:10}}>
                    Postęp:
                </Text>
                <Progress size="2xl" colorScheme="secondary" value={currentQuestionIndex*10}> </Progress>
                
                {/* Pytanie */}
               
                <Box borderWidth= "4" borderColor={colors.blue}  marginTop= "10" marginLeft="20" width = "230"  bg="primary.500" p="4" rounded="2xl" shadow={2} _text={{
                 fontSize: "50",
                 fontWeight: "bold",
                 color: colors.yellow, 
                 }}>{allQuestions[currentQuestionIndex]?.question}
                </Box>
            </View>
            </NativeBaseProvider>
        )
    }
    const renderOptions = () => {
        return (
            <NativeBaseProvider>
            <View >
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? colors.darkGreen
                            : option==currentOptionSelected 
                            ? colors.darkRed
                            : colors.darkYellow,
                            backgroundColor: option==correctOption 
                            ? colors.green
                            : option==currentOptionSelected 
                            ? colors.red
                            : colors.yellow,
                            width:"90%", height: 70, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                             justifyContent: 'center',
                            marginVertical: 5,
                            marginTop:10,
                            marginLeft:15
                            
                        }}
                        >
                            <Text style={{fontSize: 30, color: colors.darkPurple}}>{option}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            </NativeBaseProvider>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
              
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 10, width: '100%', backgroundColor: colors.orange, padding: 20, borderRadius: 100,borderWidth: 3,borderColor:colors.darkOrange
                }}>
                    <Text style={{ fontSize: 20, color: colors.darkPurple, textAlign: 'center', fontWeight: "bold"}}>Dalej</Text>
                </TouchableOpacity>
               
            )
        }else{
            return null
        }
    }
    return (
      
       <SafeAreaView style={{
           flex: 1
       }}>
           
           <View style={{
               flex: 1,
               paddingVertical: 20,
               paddingHorizontal: 16,
               backgroundColor: colors.purple,
              
           }}>

               {/* Pytanie */}
               {renderQuestion()}

               {/* Opcja */}
               {renderOptions()}

               {/* Przycisk następnego pytania */}
               {renderNextButton()}

               {/* Punktacja modalna */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: colors.purple,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: colors.darkPurple,
                           width: '90%',
                           height: 350,
                           borderRadius: 30,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{color: colors.orange,fontSize: 40, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Brawo!' : 'Ups!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 40,
                                   color: score> (allQuestions.length/2) ? colors.green : colors.red
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 30, color: colors.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Przycisk ponownego rozpoczęcia */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               borderWidth: 4, 
                               borderColor: colors.darkPink,
                               backgroundColor: colors.pink,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: colors.darkPink, fontSize: 20,fontWeight: 'bold'
                               }}>Spróbuj ponownie</Text>
                           </TouchableOpacity>
                           <TouchableOpacity
                           onPress={() => {
                            restartQuiz(),navigation.navigate('Osiagniecia',{punkty:score})
                          }}
                           style={{
                               borderWidth: 4, 
                               borderColor: colors.darkBlue,
                               backgroundColor: colors.blue,
                               padding: 20, width: '100%', borderRadius: 20,
                               marginTop:10
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: colors.darkBlue, fontSize: 20,fontWeight: 'bold'
                               }}>Osiągnięcia</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Obrazek tła */}
               

           </View>
       </SafeAreaView>
       
    )
}

export default Gra