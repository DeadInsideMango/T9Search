import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
    },
    emptyTextViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5
    },
    emptyText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400'
    },
    homeScreenView: {
        flex: 1
    },
    headerInputViewStyle: {
        width: '100%',
        flexDirection: 'column',
        flex: 1
    },
    headerInputStyle: {
        backgroundColor: '#E5E5EA',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    headerMainTextStyle: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    largeHeaderTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    smallHeaderTextStyle: {
        fontSize: 20,
        opacity: .5,
        fontWeight: 300
    }
});

export default styles;