import users from '../../apps/users/routes'

export default (app) => {
	app.use('/', users)
}