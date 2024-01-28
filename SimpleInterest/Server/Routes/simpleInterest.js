import express from 'express';

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const { principle, rate, time } = req.body;
        // principle = Number(principle);
        // rate = Number(rate);
        // time = Number(time);
        console.log("Payload: ", principle, rate, time);
        const simpleInterest = (principle * rate * time) / 100;
        console.log("output is: ", simpleInterest);
        return res.status(200).json({ simpleInterest });
    } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

export { router as simpleInterestRouter };