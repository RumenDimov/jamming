import React from "react";
import { TrackList } from "../TrackList/TrackList";
import './Playlist.css';


export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(e) {
        let input = e.target.value;
        this.props.onNameChange(input);
    }
    render() {

        return(
            <div className="Playlist">
                <input onClick={this.handleNameChange} defaultValue={'New Playlist'}/>
                  <TrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />
                 <button className="Playlist-save"
                        onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}