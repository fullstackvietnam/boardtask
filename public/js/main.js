var MY_APP = {
	lists: ['list-1', 'list-2'],
	init: () => {
		MY_APP.enableSortable(MY_APP.lists)
	}, 
	enableSortable: (e) => {
		e.forEach(element => {
			let el = document.getElementById(element);
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
		});
	}
}

MY_APP.init()
