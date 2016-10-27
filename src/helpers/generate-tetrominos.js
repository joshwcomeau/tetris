import range from 'lodash/range';

export default function generateTetrominos(num = 100) {
  return range(num).map(() => {
    // Our first order of business is randomly selecting a tetromino type.
    // The available types are:
    //  __ __
    // |__|__|    The square. Comprised of blocks [0,0], [0,1], [1,0], [1,1]
    // |__|__|
    //
    //  __
    // |__|__ __  The 'J'. Comprised of blocks [0,0], [1,0], [1,1], [1,2]
    // |__|__|__|
    //
    //        __
    //  __ __|__| The 'L'. Comprised of blocks [1,0], [1,1], [1,2], [0,2]
    // |__|__|__|
  });
}
