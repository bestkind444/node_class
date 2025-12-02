import Car from "../model/car.js";

const carCreated = async (req, res) => {
    try {
        const newcar = req.body;
        const userIfo = req.userInfo.userId;
        console.log(userIfo);

        if (!newcar) {
            return res.status(400).json({
                success: false,
                message: "no details provided"
            })
        }
        const newCarCreated = await Car.create(newcar);

        if (!newCarCreated) {
            return res.status(404).json({
                success: false,
                message: "failed to create car"
            });
        }

        res.status(201).json({
            success: true,
            message: "car created successfully",
            data: newCarCreated
        })

        console.log(newCarCreated);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }


}
export { carCreated };

const getAllCars = async (req, res) => {
    try {
        const allCars = await Car.find();
        return res.status(200).json({
            success: true,
            message: "This is all the available cars",
            data: allCars
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }

}
export { getAllCars }

const updatecars = async (req, res) => {
    try {
        const userUpdatePayload = req.body;
        const userId = req.params.id;
        if (!userUpdatePayload || !userId) {
            return res.status(400).json({
                success: false,
                message: "invalid crendential"

            })
        }
        const updated = await Car.findByIdAndUpdate(userId, userUpdatePayload, {
            new: true
        })
        return res.status(200).json({
            success: true,
            message: "car  updated successfully",
            data: updated
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }
}
export { updatecars }

const deletedCars = async (req, res) => {
    try {
        const userId = req.params.id;

        const deleted = await Car.findByIdAndDelete(userId)
        if (!deleted) {
            return res.status(400).json({
                success: false,
                message: "failed to delete"
            });

        }

        res.status(200).json({
            success: true,
            message: "deleted successfully"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }


}
export { deletedCars }