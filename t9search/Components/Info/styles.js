import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        flexWrap: 'wrap',
        width: '100%',
    },

    headerViewStyle: {
        width: '100%',
        maxWidth: '100%',
    },
    headerTextStyle: {
        fontWeight: 'bold'
    },

    sectionViewStyle: {
        flexDirection: 'column',
        alignSelf: 'auto',
        width: '100%',
    },

    shortInfoViewStyle: {
        paddingTop: 15,
        maxWidth: '90%',
    },
    shortInfoTextStyle: {
        fontSize: 25,
        fontWeight: 'normal',
    },

    infoItemViewStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        maxWidth: '90%',
        paddingTop: 7
    },
    infoItemSeparatorViewStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 10
    },

    infoListiewStyle: {
        paddingTop: 15
    }
});