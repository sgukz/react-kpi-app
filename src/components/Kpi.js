import React, { Component } from "react";

class Kpi extends Component {
    render() {
        return (
            <div className="card border-primary">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <form>
                        <fieldset>
                            <legend>Legend</legend>
                            <div className="form-group row">
                                <label
                                    htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label">
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        readOnly
                                        className="form-control-plaintext"
                                        id="staticEmail"
                                        defaultValue="email@example.com"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1">
                                    Example select
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect2">
                                    Example multiple select
                                </label>
                                <select
                                    multiple
                                    className="form-control"
                                    id="exampleSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleTextarea">
                                    Example textarea
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleTextarea"
                                    rows={3}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">
                                    File input
                                </label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleInputFile"
                                    aria-describedby="fileHelp"
                                />
                                <small
                                    id="fileHelp"
                                    className="form-text text-muted">
                                    This is some placeholder block-level help
                                    text for the above input. It's a bit lighter
                                    and easily wraps to a new line.
                                </small>
                            </div>
                            <fieldset className="form-group">
                                <legend>Radio buttons</legend>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="optionsRadios"
                                            id="optionsRadios1"
                                            defaultValue="option1"
                                            defaultChecked
                                        />
                                        Option one is this and that—be sure to
                                        include why it's great
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="optionsRadios"
                                            id="optionsRadios2"
                                            defaultValue="option2"
                                        />
                                        Option two can be something else and
                                        selecting it will deselect option one
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <label className="form-check-label">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="optionsRadios"
                                            id="optionsRadios3"
                                            defaultValue="option3"
                                            disabled
                                        />
                                        Option three is disabled
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend>Checkboxes</legend>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            defaultChecked
                                        />
                                        Option one is this and that—be sure to
                                        include why it's great
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <label className="form-check-label">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            disabled
                                        />
                                        Option two is disabled
                                    </label>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default Kpi;
