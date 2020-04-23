import React from 'react';

class PhotoUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            file: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllFishes();
    }

    handleFile(e) {
        e.preventDefault();
        this.setState({
            description: e.target.value,
            file: e.target.files[0],
            fishId: null
        });
    }

    handleChange(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleUpload(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("file", this.state.file, this.state.description);
        this.props.uploadPhoto(data);
    }

    render() {
        return (
            <div>
                <h1>Photo Upload Form</h1>
                <div>
                    <form action="" onSubmit={this.handleUpload}>
                        <select value={this.state.fishId} onChange={this.handleChange("fishId")}>
                            {
                                this.props.fishes.map(fish => <option key={fish.id} value={fish.id}>{fish.name}</option>)
                            }
                        </select>
                        <br/>
                        <input type="file" onChange={this.handleFile}/>
                        <br/>
                        <input type="text" value={this.state.description} placeholder="Filename" onChange={this.handleChange("description")}/>
                        <input type="submit" value="Upload"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default PhotoUpload;