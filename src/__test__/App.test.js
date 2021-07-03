// import { render, screen } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";
import PersonList from "../PersonList";

describe("App", () => {
	let appWrapper;

	beforeAll(() => {
		appWrapper = shallow(<App />);
	});

	it("App component renders a child compo named PersonList", () => {
		// const appWrapper = shallow(<App />);
		const personList = appWrapper.find(PersonList); //find child compo

		expect(personList).toHaveLength(1);
	});

	it("check that App compo contains state", () => {
		// const appWrapper = shallow(<App />);
		const appState = appWrapper.state(); // does component contain state

		expect(appState).not.toBeNull();
	});

	it("App compo contains property named 'people' in state", () => {
		// const appWrapper = shallow(<App />);
		const appState = appWrapper.state(); // does component contain state of people

		expect(appState.people).toBeDefined();
	});

	it("App passes 'people' property of state to PersonList as prop", () => {
		// const appWrapper = shallow(<App />);
		const personList = appWrapper.find(PersonList); //find child compo

		expect(personList.props().people).toEqual(appWrapper.state().people);
	});
});
