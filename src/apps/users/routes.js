import {Router} from 'express'

import * as UserApi from './controller'


const router = new Router()

router.route('/')
	.get(UserApi.getHome)

router.route('/usuarios')
	.get(UserApi.getUsers)


router.route('/usuarios1')
	.get(UserApi.getUs)


export default router