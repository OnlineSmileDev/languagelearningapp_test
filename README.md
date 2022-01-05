# Welcome to StackEdit!

Hi! I am Noda Hikaru from Japan who applied to this React Native developer position and wrote test code with React Native and Typescript, Firebase upon requirement.
### completed 

 - Project setup & structure
 - Integrated Firebase Firestore instance
 - Created basic UI for onboard screen 
 - Created Firestore collection structure
 in 2 hours

# How to build and run app

> git clone https://github.com/nodahikaru/languagelearningapp_test.git
> npm install
> npx react-native run-ios

## Firestore collection/document 
collection name : 'sentences'
document properties

 - coordinates 
 This property stores coordinates words that user can choose for correct answer
 - dutch
 This property holds dutch sentence that is expected to be correct sentence
 - english
 This property is example English sentence corresponding to correct dutch sentence
 - highlight_position
 This property is the index of correct English word. e.x House in Test design screenshot
 - missing_word_position
 This property is the index of position should be filled by user. 
 - Updated_at, Created_at

## Used plugins and dependencies 

 - @react-native-firebase/app
 - @react-native-firebase/firestore
 - @react-navigation/native
 - @react-navigation/native-stack
