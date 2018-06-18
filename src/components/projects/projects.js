import React, { Component } from 'react';
import styles from './projects.css';
import Card from '../UI/Card/Card';

class Projects extends Component {

  render() {
    const projectsClasses = [
      styles.projects,
      this.props.animation ? styles.projectsAnim : null,
      this.props.state ? styles.projectsStateAnim : null
    ]
    return (
      <div className={projectsClasses.join(' ')} id="projects">
        <h1>Projects</h1>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Card title="Burger builder" titleclass="projectsTitle" cardclass="projects">
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda eveniet accusantium quas unde tempora odio qui, consequatur fuga? Unde.</p>
            </Card>
          </div>
          <div className={styles.item}>
            <Card title="Angular chat app" titleclass="projectsTitle" cardclass="projects">
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quia adipisci autem eaque inventore voluptate quaerat enim. Reprehenderit, facilis sunt.</p>
            </Card>
          </div>
          <div className={styles.item}>
            <Card title="Youtube api app" titleclass="projectsTitle" cardclass="projects">
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta natus impedit! Dolor recusandae fugiat aliquid, magni delectus ad sit.</p>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;