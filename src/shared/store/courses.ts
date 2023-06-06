import {action, computed, makeAutoObservable, observable} from 'mobx'

import {CourseSingleType, CourseType} from '@/src/shared/api'

type TCourse = CourseType | CourseSingleType

interface ICourseStore {
	get asJson(): {courses: Array<TCourse>}
	updateCourse(data: TCourse): void
	getCourses(): {courses: Array<TCourse>}
}

interface ICourse {
	id: string
	data: TCourse
	get asJson(): TCourse
	updateItem(data: TCourse): void
}

export class CoursesStore implements ICourseStore {
	private static instance: CoursesStore
	private courses: Array<ICourse> = []
	private constructor() {
		makeAutoObservable(this)
	}

	public static getInstance(): CoursesStore {
		if (!CoursesStore.instance) {
			CoursesStore.instance = new CoursesStore()
		}

		return CoursesStore.instance
	}

	public init(data: Array<CourseType>) {
		this.courses = data.map((item) => this.addCourse(item))
	}

	public addCourse(data: CourseType): ICourse {
		return new Course(data)
	}

	public updateCourse(json: CourseSingleType) {
		let course = this.courses.find((item) => item.id === json.id)
		if (!course) {
			course = new Course(json)
		} else {
			course.updateItem(json)
		}
	}

	public getData() {
		return this.courses.map((item) => item.data)
	}
	public getCourses() {
		return {courses: this.getData()}
	}

	get asJson() {
		return this.getCourses()
	}
}

export class Course implements ICourse {
	id: string
	data: TCourse

	constructor(data: TCourse) {
		makeAutoObservable(this, {
			data: observable,
			asJson: computed,
			updateItem: action,
		})
		this.data = data
		this.id = data.id
	}

	get asJson(): TCourse {
		return {...this.data}
	}

	updateItem(data: TCourse): void {
		this.data = {...data}
	}
}
