import React, { Suspense } from 'react';

import { Fallback } from './fallback';

export class LazyImport extends React.Component {
  render() {
    return (
      <Suspense
        fallback={
          <div className="fallback">
            <Fallback></Fallback>
          </div>
        }
      >
        {this.props.children}
      </Suspense>
    );
  }
}
