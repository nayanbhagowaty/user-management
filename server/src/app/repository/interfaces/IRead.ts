﻿interface IRead<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    findByid: (_id: string, callback: (error: any, result: T) => void) => void;
}

export default IRead;