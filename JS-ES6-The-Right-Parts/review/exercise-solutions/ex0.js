(() =>  {

	var foo = (x) => {
		var y = x * 2;

		// can't make this an arrow since it has no 'this' binding/context,
		// you can't use .call/bind/apply on it, line 32
		return function bar(z) {
			if (z.length > 3) {
				return z.map( function baz(v){
					if (v > 3) return v + y;
					else return baz( v * 4 );
				} );
			}
			else {
				var obj = [];

				setTimeout(() => {
					obj.length = 1;
					obj[0] = this.w;
				}, 100 );

				return obj;
			}
		};
	}

	var p = foo( 2 );
	var list1 = [1,3,4];
	var list2 = list1.concat( 6 );

	list1 = p.call( { w: 42 }, list1 );
	list2 = p( list2 );

	setTimeout(() => {
		console.log( list1[0] === list2.reduce( (s,v) => {
			return s + v;
		}, 0 ) );
	}, 200 );
})();
