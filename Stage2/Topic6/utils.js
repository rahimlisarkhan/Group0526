class TextUtils {

    toUpperCase(text) {
        return text.toUpperCase();
    }

    toLowerCase(text) {
        return text.toLowerCase();
    }

    reverse(text) {
        return text.split("").reverse().join("");
    }

    capitalize(text) {
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    }

    countWords(text) {
        return text.trim().split(" ").length;
    }

    countCharacters(text) {
        return text.length;
    }

    removeExtraSpaces(text) {
        return text.trim().replaceAll("  ", " ");
    }
}