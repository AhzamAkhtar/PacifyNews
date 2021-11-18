import React, { Component} from 'react'
import PropTypes from 'prop-types'

export class NewsItems extends Component {
    

    render() {
        let {title,description,imgurl,newsurl}=this.props
        return (
            <div>
                <div className="card">
                    <img src={!imgurl?"https://picsum.photos/seed/picsum/200/300":imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} target="_blank" className="btn  btn -sm btn-secondary">READ MORE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
