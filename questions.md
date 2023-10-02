1. 	PureComponent prevents rerenders when parent component rerenders 
	and new poperties/old properties are equal by shallow comparison. 
	Might be broken when we mutate state or properties from the parent component

2.	Like with PureComponent, shouldComponentUpdate relies to shallow comparison. 
	Context can change without triggering rerender.

3.	Function,Redux,Context

4.	React.memo, useMemo

5.	Fragment helps us to group multiple elements (lists for example) without additional containers.

6.	DataHOC, StylesHOC, AccessHOC

7.	async/wait we use additionally try/catch to handle errors, 
	but this is similar to synchronous error handling.

8.	2 arguments:
	1. object with new values/function receive previous state and representing new value for state.
	2. callback - will be executed when setState has been completed and compoenent has been rerendered.
	setState is batched function. we can run multiple times but component will be rerendered 1 time.
	
9.	1. migrate state and logic
	2. migrate lifecycle methods
	3. optimize FC using useMemo/useCallback/useRef

10.	1. inline styles
	2. css classes
	3. scss styles
	4. styled component

11.	using dangerouslySetInnreHTML