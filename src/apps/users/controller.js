import User from './models/user'

export const getUsers = async (req, res) => {
	
	try{
		let search = req.query.search 
		let users, users_nombres, users_apellidos, users_email

		if(!search) {
			users = await User.find()			 
		}
		else{
			 users_nombres = await User.find({'nombres': new RegExp(search,'i')})
			 users_apellidos = await User.find({'apellidos': new RegExp(search,'i')})
			 users_email = await User.find({'email': new RegExp(search,'i')})
		}
		
		let context = {
				users_nombres : users_nombres,
				users_apellidos: users_apellidos,
				users_email : users_email,
				users : users

		}
		return res.render('users/users.html', context)
	}catch(err){
		console.log(err)
	}
}


export function getHome(req, res) {
	return res.render('users/home.html')
}


