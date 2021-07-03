import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import PersonList from "../PersonList";

describe("PersonList", () => {
	it("render ul", () => {
		const personListWrapper = shallow(<PersonList />);
		const peoplelistUI = personListWrapper.find("ul"); // find selector
		expect(peoplelistUI).toHaveLength(1);
	});

	// z o m bie

	// zero
	// one
	// many

	it("render no li when no people[] exists", () => {
		const people = [];
		const personListWrapper = shallow(<PersonList people={people} />);
		const peoplelistItems = personListWrapper.find("li"); // find selector
		expect(peoplelistItems).toHaveLength(0);
	});

	it("render one li when 1 person exists", () => {
		const people = [{ firstName: "Dave", lastName: "Wa" }];
		const personListWrapper = shallow(<PersonList people={people} />);
		const peoplelistItems = personListWrapper.find("li"); // find selector
		expect(peoplelistItems).toHaveLength(1);
	});

	it("render many than one li when many persons exist", () => {
		const people = [
			{ firstName: "Dave", lastName: "Wa" },
			{ firstName: "Bob", lastName: "Mortimier" },
		];
		const personListWrapper = shallow(<PersonList people={people} />);
		const peoplelistItems = personListWrapper.find("li"); // find selector
		expect(peoplelistItems).toHaveLength(2);
	});

	it("display li name -1 person", () => {
		const people = [{ firstName: "Dave", lastName: "Wa" }];
		const personListWrapper = shallow(<PersonList people={people} />);
		const peoplelistItems = personListWrapper.find("li"); // find selector
		expect(personListWrapper.find("li").text()).toContain(people[0].firstName);
		expect(personListWrapper.find("li").text()).toContain(people[0].lastName);
	});
});
