import assert from 'assert'
import Bucket from '../../src/simperium/bucket'
import defaultStore from '../../src/simperium/storage/default'

describe( 'default store', function() {
	var bucket;

	beforeEach( function() {
		bucket = new Bucket( 'things', defaultStore );
	} )

	it( 'should store object update', function( done ) {
		var id = 'thing',
			data = {one: 'two'};

		bucket.update( id, data, function() {
			bucket.get( id, function( err, object ) {
				assert.deepEqual( object, { data, id } );
				done();
			} );
		} );
	} );

	it( 'should update with options', function( done ) {
		var id = 'thing',
			data = {one: 'two'}

		bucket.update( id, data, {}, function() {
			bucket.get( id, function( err, object ) {
				assert.deepEqual( object, { data, id } );
				done();
			} )
		} )
	} );
} )
