import { ScrollView, SectionList, FlatList as RNFlatList } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import createCollapsibleScrollView from './createCollapsibleScrollView'
export { HeaderContext } from './HeaderContext'
export { default as GestureContainer } from './GestureContainer'

const HScrollView = createCollapsibleScrollView(ScrollView)
const HFlatList = createCollapsibleScrollView(RNFlatList)
const GHFlatList = createCollapsibleScrollView(FlatList)
const HSectionList = createCollapsibleScrollView(SectionList)
export { HScrollView, HFlatList, HSectionList, GHFlatList }