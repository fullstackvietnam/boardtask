var data = [{
		id: 1,
		name: 'item 01'
	},
	{
		id: 2,
		name: 'item 02'
	}, {
		id: 3,
		name: 'item 03'
	}
]


var MY_APP = {
	lists: ['list-1', 'list-2'],
	template: (e) => {
		return '<li class="list-group-item">' + e + '</li>'
	},
	init: () => {
		for (let key in MY_APP.lists) {
			if (MY_APP.lists.hasOwnProperty(key)) {
				let element = MY_APP.lists[key];
				$('#' + element).append(MY_APP.createLists())
				MY_APP.enableSortable(element)
			}
		}
	},
	createLists: () => {
		let tmp = []
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				let element = data[key].name;
				tmp.push(MY_APP.template(element))
			}
		}
		return tmp
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
