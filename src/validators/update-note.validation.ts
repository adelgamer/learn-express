import { NotePrivacy, NoteStatus } from "../../generated/prisma/enums.js";

export const updateNoteValidationSchema = {
    title: {
        errorMessage: "Title must be between 3 and 255 characters",
        isLength: {
            options: { min: 3, max: 255 }
        },
        notEmpty: true
    },
    privacy: {
        errorMessage: "Privacy not supported",
        isIn: {
            options: [Object.values(NotePrivacy)]
        }
    },
    status: {
        errorMessage: "Status must be draft or published only",
        isIn: {
            options: [Object.values(NoteStatus)]
        }
    },
    favorite: {
        errorMessage: "Favorite must be a boolean",
        isBoolean: true
    }
}