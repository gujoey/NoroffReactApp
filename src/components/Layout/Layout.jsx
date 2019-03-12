import React, { PropTypes } from 'react';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="[ container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
				<div className='[ header ]'>
					<img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" alt="Rick and Morty"/>
				</div>
            </div>
          </div>
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

export default Layout;
