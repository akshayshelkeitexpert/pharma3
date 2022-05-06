export class ValidationConstants {
    public static EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    public static PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/;
    public static NUMBER_ONLY = /^[0-9]+$/;
    //public static PRICE_ONLY = /(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$| )/;
    public static PRICE_ONLY = /^\d+(,\d{1,2})?$/;
    public static CHARACTER_WITHOUT_SPACE_AT_END_START = /^[a-zA-Z_-]*$/;
    public static ALPHABETS_ONLY = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF a-zA-Z]*$/;
    // public static ALPHABETS_ONLY_WITHOUT_SPACE = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF a-zA-Z]+$/;
    // public static CHARACTER_WITHOUT_SPACE = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF a-zA-Z0-9_-]*$/;
    public static CHECK_SPACE_ONLY = /^(?=.*\S).+$/;
    public static GREATER_THAN_ZERO = /^[1-9]\d*$/;

}
