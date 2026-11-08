// // // console.log('hello world!')
// // // const Duplicates = [1, 2, 2, 3, 1, 4]

// // // function removeDuplicates(dub) {
// // // 	return dub.reduce((acc, cur) => {
// // // 		if(!acc.includes(cur)){
// // // 			acc.push(cur)
// // // 		}
// // // 		return acc
// // // 	}, [])
// // // }

// // // console.log(removeDuplicates(Duplicates));
// // const users = [
// // 	{ name: "Alex", role: "admin" },
// // 	{ name: "John", role: "user" },
// // 	{ name: "Mike", role: "user" },
// // 	{ name: "Kate", role: "admin" },
// // 	{ name: "Sam", role: "moderator" }
// // ]

// // function countByRole(users) {
// // 	return users.reduce((acc, user) => {
// // 		if (acc[user.role]) {
// // 			acc[user.role] += 1
// // 		} else {
// // 			acc[user.role] = 1
// // 		}
// // 		return acc
// // 	}, {})
// // }

// // console.log(countByRole(users));

// const users = [
// 	{ name: "Alex", score: 80, isActive: true },
// 	{ name: "John", score: 95, isActive: false },
// 	{ name: "Mike", score: 90, isActive: true },
// 	{ name: "Kate", score: 70, isActive: true },
// 	{ name: "Sam", score: 100, isActive: true },
// 	{ name: "Tom", score: 85, isActive: true }
// ]

// function filter(users) {
// 	return users.filter(el => el.isActive === true)
// }

// function sort(users) {
// 	return users.sort((a, b) => b.score - a.score)
// }

// function slice(users) {
// 	return users.slice(0, 3)
// }
// function getTopUsers(users) {
// 	return users
//   .sort((a, b) => b.score - a.score)
//   .filter(el => el.isActive)
//   .slice(0, 3)
// }


// console.log(getTopUsers(users))
// console.log(users)


// const func = function () {

// }
// const dub = (users) => {

// }
// dub()
// const name = "Alex";

// function sayHello() {
//   console.log(name);
// }

// sayHello();

// function sayHello() {
//   const name = "Alex";

//   console.log(name);
// }

// sayHello();

// // console.log(name);
// const users = [
// 	{ name: "Alex", age: 21, isActive: true },
// 	{ name: "Mike", age: 17, isActive: false },
// 	{ name: "John", age: 25, isActive: true }
// ]

// function getUserInfo(users) {
// 	const activeUsers = users.filter((el) => el.isActive === true)
// 	return activeUsers.map(el => el.name)

// }

// console.log(getUserInfo(users))
// const users = [
// 	{ name: "Alex", age: 21 },
// 	{ name: "Mike", age: 17 },
// 	{ name: "John", age: 25 },
// 	{ name: "Sam", age: 16 }
// ]

// function getAdultUsers(users) {
// 	const adults
// }
function createCounter() {
	let count = 0

	return {
		increment() {
			count++
		},
		decrement() {
			count--
		},
		getValue() {
			return count
		}
	}
}

const counter = createCounter()

counter.increment()
counter.increment()
counter.decrement()

console.log(counter.getValue());

