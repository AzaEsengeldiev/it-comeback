// // console.log('hello world!')
// // const Duplicates = [1, 2, 2, 3, 1, 4]

// // function removeDuplicates(dub) {
// // 	return dub.reduce((acc, cur) => {
// // 		if(!acc.includes(cur)){
// // 			acc.push(cur)
// // 		}
// // 		return acc
// // 	}, [])
// // }

// // console.log(removeDuplicates(Duplicates));
// const users = [
// 	{ name: "Alex", role: "admin" },
// 	{ name: "John", role: "user" },
// 	{ name: "Mike", role: "user" },
// 	{ name: "Kate", role: "admin" },
// 	{ name: "Sam", role: "moderator" }
// ]

// function countByRole(users) {
// 	return users.reduce((acc, user) => {
// 		if (acc[user.role]) {
// 			acc[user.role] += 1
// 		} else {
// 			acc[user.role] = 1
// 		}
// 		return acc
// 	}, {})
// }

// console.log(countByRole(users));

const users = [
	{ name: "Alex", score: 80, isActive: true },
	{ name: "John", score: 95, isActive: false },
	{ name: "Mike", score: 90, isActive: true },
	{ name: "Kate", score: 70, isActive: true },
	{ name: "Sam", score: 100, isActive: true },
	{ name: "Tom", score: 85, isActive: true }
]

function filter(users) {
	return users.filter(el => el.isActive === true)
}

function sort(users) {
	return users.sort((a, b) => b.score - a.score)
}

function slice(users) {
	return users.slice(0, 3)
}
function getTopUsers(users) {
	return users
  .sort((a, b) => b.score - a.score)
  .filter(el => el.isActive)
  .slice(0, 3)
}


console.log(getTopUsers(users))
console.log(users)
