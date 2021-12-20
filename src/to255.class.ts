
export class To255 {

    private static phone: string = "";

    public static phoneNumber(phone: string) {
        To255.phone = phone;
        return To255;
    }

    public static toString() {

        if (To255.phone.trim().startsWith("255")) {
            if (To255.phone.trim().length != 12) {
                throw new Error("Please pass valid phone number")
            }
            return To255.phone.trim();
        } else if (To255.phone.trim().startsWith("0")) {
            return `255${To255.phone.trim().substring(1)}`;
        } else {
            throw new Error("Please pass valid phone number");
        }

    }
}