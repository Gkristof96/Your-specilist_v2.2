import express from 'express'
const router = express.Router()
import { createOffer } from '../controllers/offerControllers.js'

router.route('/').post(createOffer)

export default router