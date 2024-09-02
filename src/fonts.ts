// Supports weights 100-900
import '@fontsource-variable/montserrat';
import '@fontsource/roboto';
// Supports weights 100-900
import '@fontsource-variable/raleway';
import '@fontsource/lato';

const getMontserratStyle = (fontWeight: number) => {
    return {
        fontFamily: "'Montserrat Variable', sans-serif",
        fontWeight: fontWeight
    };
}

const getRobotoStyle = (fontWeight: number) => {
    return {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: fontWeight
    };
}

const getRalewayStyle = (fontWeight: number) => {
    return {
        fontFamily: "'Raleway Variable', sans-serif",
        fontWeight: fontWeight
    };
}

const getLatoStyle = (fontWeight: number) => {
    return {
        fontFamily: "'Lato', sans-serif",
        fontWeight: fontWeight
    };
}



export {
    getMontserratStyle,
    getRobotoStyle,
    getRalewayStyle,
    getLatoStyle
};