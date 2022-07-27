
/**
 * @typedef {{
 * name: string,
 * email: string,
 * school email: string,
 * PID: string,
 * Graduation Year: string
 * }} Info
 * 
 * 
 */

export const exampleInfo = {
    "name":"James Ruan",
    "email":"jrjamesruan@gmail.com",
    "school email": "jruan@ucsd.edu",
    "PID": A15730167,
    "Graduation Year": "2022"
}


export function generateInfoId(){
    return crypto.randomUUID();
}

/**
 * define types of the parameter and return
 * @param {string} [infoId] 
 * @param {Info} [info] 
 * @return {HTMLElement}
 */
export function renderInfo(infoId, info) {
    const template = document.getElementById("info-template");
    
    const infoElement = templete.content.cloneNode(true);
    console.log(infoElement.children[0]);

    
}

