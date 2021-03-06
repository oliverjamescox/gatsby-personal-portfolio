import React from 'react'

import { Link } from 'gatsby'
import '../01-Project-Card/project-card.css'

import cloudinary from 'cloudinary-core'

class ProjectCard extends React.Component {

    constructor(props) {
        super()
        this.state = {
            title: props.title,
            tech: props.tech,
            descript1: props.descript1,
            descript2: props.descript2,
            link: props.link,
            image: props.image,
            alt: props.alt
        }
    }

    componentDidMount() {
        var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
        cl.responsive();
    }

    render() {

        return (
                <div className="project-container">
                    <div className="project-container-sec1">
                        <div className="project-title">
                            {this.state.title}
                        </div>
                        <div className="project-tech">
                            {this.state.tech}
                        </div>
                        <div className="project-desc">
                            {this.state.descript1}<br /><br />
                            {this.state.descript2}
                        </div>
                        <p className="blog--card-cta">
                            <Link to={this.state.link}>Find out more &rarr;</Link>
                        </p>
                    </div>
                    <div className="project-container-sec2">
                        <Link to={this.state.link}>
                        <img 
                            data-src={this.state.image} 
                            className="cld-responsive"
                            alt={this.state.alt}
                        />
                        </Link>
                    </div>
                </div>
        )

    }

}

export default ProjectCard