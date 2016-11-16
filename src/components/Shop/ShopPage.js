import React from 'react'

const ShopPage = () => (
	<div className="row">
		<div className="col s12 l4 offset-l8">
			<ul className="pagination">
				<li className="disabled">
          <a href="#!"><i className="material-icons">
            chevron_left
          </i>
        </a>
      </li>
				<li className="active">
          <a href="#!">1</a>
        </li>
				<li className="waves-effect">
          <a href="#!">2</a>
        </li>
				<li className="waves-effect">
          <a href="#!">3</a>
        </li>
				<li className="waves-effect">
          <a href="#!">4</a>
        </li>
				<li className="waves-effect">
          <a href="#!">5</a>
        </li>
				<li className="waves-effect">
          <a href="#!">
            <i className="material-icons">
              chevron_right
            </i>
          </a>
        </li>
			</ul>
		</div>
	</div>
)

export default ShopPage
