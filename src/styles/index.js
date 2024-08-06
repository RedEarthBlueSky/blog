//  styles
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center',},
  H1: {fontSize:46},
  H2: {fontSize:40},
  H3: {fontSize:34},
  H4: {fontSize:28},
  H5: {fontSize:22},
  H6: {fontSize:18},
  P: {fontSize:14},
  blogRow: {
    borderTopWidth: 1, 
    borderBottomWidth: 1, 
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal:10,
    paddingVertical:20,
  },
  //  headerRight TO styles
  createBlogPost: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    position: 'absolute', 
    right: 5, 
    top: 10,
  },
  submitButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    marginTop: 10,
    width: '60%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createScreenInput: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
  },
  createScreenLabel: {
    fontSize: 22,
    // fontWeight: 'bold',
    marginHorizontal: 10,
  },
  screenTitle: {
    fontSize: 34,
    marginVertical: 10,
    marginLeft: 10,
  }
});

export default styles