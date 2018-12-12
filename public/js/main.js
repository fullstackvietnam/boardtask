var data = [{
		id: 1,
		name: 'Noi dung df'
	},
	{
		id: 2,
		name: 'Noi dung dsfds fsdf'
	}, {
		id: 3,
		name: 'Noi dung sdf sfsdf'
	}
]
var MY_APP = {
	lists: ['list-1', 'list-2'],
	init: () => {
		MY_APP.createList(MY_APP.lists)
	},
	createList: (e) => {
		e.forEach(element => {
			let tmp = ''
			for (let key in data) {
				if (data.hasOwnProperty(key)) {
					tmp = tmp + '<li>' + data[key].name + '</li>'
				}
			}
			$('#' + element).append(tmp)
			MY_APP.enableSortable(element)
		})
	},
	enableSortable: (e) => {
		let el = document.getElementById(e);
		let sortable = Sortable.create(el, {
			group: "name",
			onEnd: (evt) => {
				console.log('Ket thuc', evt)
			},
			onUpdate: (evt) => {
				console.log('Cap nhat', evt)
			},
			onSort: (evt) => {
				console.log('Sap xep', evt)
			},
		});
	}
}

MY_APP.init()
