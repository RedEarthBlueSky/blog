import { StatusBar } from 'react-native'
const em = 16
//  rename parentStyles to textStyles
const parentStyles = {
  bold: {fontWeight: 'bold'},
  h1: {fontSize: 2*em},
  h2: {fontSize: 1.5*em},
  h2bold: {fontSize: 1.5*em, fontWeight: 'bold'},
  h3: {fontSize: 1.13*em},
  h3bold: {fontSize: 1.13*em, fontWeight: 'bold'},
  h4: {fontSize: em},
  h5: {fontSize: 0.83*em},
  h6: {fontSize: 0.67*em},
  italic: {fontStyle: 'italic'},
  p: {fontSize: em},
  pbold: {fontSize: em, fontWeight: 'bold'},
  TOButton: {alignItems: 'center', flexDirection: 'row', alignSelf:'center', 
    backgroundColor:'#e31cad', borderRadius:5, justifyContent: 'space-between', marginVertical:5, 
    paddingLeft:8, paddingRight: 14, paddingVertical:4,width:'95%',},
  TOButtonText: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
  TOButtonIcon: {fontSize: 18, fontWeight: 'bold'},
  blogpost: {alignItems: 'center', flexDirection: 'row', alignSelf:'center', 
    borderWidth: 1, borderColor: 'black',
    borderRadius:5, justifyContent: 'space-between', marginVertical:5, 
    paddingLeft:8, paddingRight: 20, paddingVertical:6,width:'95%',},
}
const listStyles = {
  ...parentStyles,
  container: { marginRight: 15 },
  image: { borderRadius: 5, height: 120, width: 250 },
  listImage: { borderRadius: 5, height: 120, margin: 10, width: 250,},
  resultsListContainer: { marginBottom: 15 },
  rowContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }
}
const wrapperStyles = {
  wrapper: {
    // backgroundColor: 'red',
    flex: 1,
    padding: 15,
    paddingTop: StatusBar.currentHeight,
  }
}
const appStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
const searchStyles = {
  // ...parentStyles,
  backgroundStyle: {
    backgroundColor: '#abdbe3',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 30,
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 1.13*em,
  },
}
export { listStyles, parentStyles, searchStyles, wrapperStyles, appStyles }