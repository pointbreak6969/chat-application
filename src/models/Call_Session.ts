import mongoose from "mongoose";
const CallSessionSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversations",
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
    },

})
export default mongoose.models.CallSession || mongoose.model("CallSession", CallSessionSchema)