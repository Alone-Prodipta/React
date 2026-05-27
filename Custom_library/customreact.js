function renderMethod(reactElement, Container)
{
    /*______________Method 1_______________
    const domElement= document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    domElement.setAttribute("target",reactElement.props.target);
    Container.appendChild(domElement);*/

    /*______________Method 2_______________*/
    const domElement= document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    for(const prop in reactElement.props)
    {
        if(prop=== "children")
        {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    Container.appendChild(domElement);
}

const reactElement= {
    type: 'a',
    props:{
        href: "https://feathers.great-site.net",
        target: "_blank"
    },
    children: "click here",
}

const mainContainer= document.querySelector("#root");
renderMethod(reactElement, mainContainer);