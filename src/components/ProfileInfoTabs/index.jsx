import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Stories from '../../components/Stories';
import Testimonials from '../../components/Testimonials';
import Badges from '../../components/Badges';
import Photos from '../../components/Photos';
import {PROFILE_TAB_NAVS} from '../../config';
import * as _ from 'lodash';
import './styles.scss';

class ProfileInfoTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "stories"
    };
  }

  render() {
    const stories = this.props.stories;
    const testimonials = this.props.testimonials;
    const badges = this.props.badges;
    const photos = this.props.photos;

    const storyObj = {
      stories: stories.items || [], ...stories,
      fetchStories: this.props.fetchStories,
      fetchStory: this.props.fetchStory,
      profileName: this.props.profileName,
      onPopupActive: this.props.onPopupActive
    };
    const testimonialObj = {
      testimonials: testimonials.items || [], ...testimonials,
      fetchTestimonials: this.props.fetchTestimonials,
      fetchTestimonial: this.props.fetchTestimonial,
      profileName: this.props.profileName,
      onPopupActive: this.props.onPopupActive
    };
    const badgesObj = {
      badges: badges.items || [], ...badges,
      fetchBadges: this.props.fetchBadges,
      fetchBadge: this.props.fetchBadge,
      profileName: this.props.profileName,
      onPopupActive: this.props.onPopupActive
    };
    const photosObj = {
      photos: photos.items || [], ...photos,
      fetchPhotos: this.props.fetchPhotos,
      fetchPhoto: this.props.fetchPhoto,
      profileName: this.props.profileName,
      onPopupActive: this.props.onPopupActive
    };

    const navs = _.clone(PROFILE_TAB_NAVS);
    navs[ 0 ].count = stories.total;
    navs[ 1 ].count = photos.total;
    navs[ 2 ].count = testimonials.total;
    navs[ 3 ].count = badges.total;
    return (
      <div id="tabnavs" className="profile-tabs">
        <div className="tabnav-view">
          <nav className="bar-tabnavs viewport">
            {
              navs.map((item, i) => {
                return (
                  <a key={i} className={"tabnav " + item.id + (this.state.activeTab === item.id ? ' active' : '')}
                     onClick={() => {this.setState({ activeTab: item.id }) }}
                  >
                    <span className="i-count">{item.count}</span> <span className="i-name">{item.name}</span>
                  </a>
                )
              })
            }
          </nav>
          <div className="tab-con">
            {this.state.activeTab === 'stories' && <Stories {...storyObj} />}
            {this.state.activeTab === 'testimonials' && <Testimonials {...testimonialObj} />}
            {this.state.activeTab === 'badges' && <Badges {...badgesObj} />}
            {this.state.activeTab === 'photos' && <Photos {...photosObj} />}
          </div>
        </div>
      </div>
    )
  }
}

ProfileInfoTabs.propTypes = {
  props: PropTypes.object
};

export default ProfileInfoTabs;
