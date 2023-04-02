import { Dimensions } from "react-native";
import { theme } from "native-base";

export const styles = {
    sectionStyle: {
        paddingY: 1,
        marginBottom: 3
    },
    titleStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2,
        marginTop: 1,
    },
    headingStyle: {
        fontSize: 26,
        marginLeft: 2.5,
    },
    headingIconStyle: {
        size: 32,
        color: theme.colors.darkBlue[400],
    },
    swiperStyle: {
        autoplay: true,
        autoplayDelay: 5,
        autoplayLoop: true,
        showPagination: true,
        autoplayLoopKeepAnimation: true,
        paginationStyle: {

        },
        paginationStyleItem: {
            width: 11,
            height: 11,
            marginHorizontal: 6
        },
        paginationDefaultColor: theme.colors.gray[300],
        paginationActiveColor: theme.colors.darkBlue[400],
    },
    topicStyle: {
        borderRadius: 12,
        height: 95,
        marginBottom: 2,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
    },
    topicTextStyle: {
        flex: 1,
        paddingLeft: 3,
    },
    topicHeadingStyle: {
        fontSize: 22,
        color: "white",
    },
    topicSubStyle: {
        color: "gray.400",
    },
    cardStyle: {
        flex: 1,
        width: Dimensions.get('window').width - 28,
        height: 220,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: theme.colors.gray[700],
        position: "relative",
    },
    cardImageStyle: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    cardTextStyle: {
        flex: 1,
        paddingX: 5,
        paddingY: 6,
        height: "100%",
        justifyContent: "flex-end",
    },
    iconBgStyle: {
        width: 65,
        height: 65,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    btnStyle: {
        bg: "darkBlue.500",
        _pressed: {bg: "darkBlue.600"},
        marginTop: 2,
        size: "lg",
        borderRadius: 8,
    }
}
