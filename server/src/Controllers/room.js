import Hotel from "../Modules/Hotel.js";
import Room from "../Modules/Room.js";


export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const saveRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: saveRoom._id },
            })
        } catch (err) {
            next(err);
        }
        res.status(200).json(saveRoom);
    } catch (err) {
        next(err);
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelID = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelID, {
                $pull: { rooms: req.params.id }
            })
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted!")
    } catch (err) {
        next(err);
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const getSingleRoom = await Room.findById(req.params.id);
        res.status(200).json(getSingleRoom);
    } catch (err) {
        next(err);
    }
}

export const getRooms = async (req, res, next) => {
    try {
        const getAllRooms = await Room.find();
        res.status(200).json(getAllRooms);
    } catch (err) {
        next(err);
    }
}

// export const updateRoomAvailability = async (req, res, next) => {
//     try {
//       await Room.updateOne(
//         { "roomNumbers._id": req.params.id },
//         {
//           $push: {
//             "roomNumbers.$.unavailableDates": req.body.dates
//           },
//         }
//       );
//       res.status(200).json("Room status has been updated.");
//     } catch (err) {
//       next(err);
//     }
//   };



