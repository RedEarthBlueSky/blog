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
  }
});

export default styles