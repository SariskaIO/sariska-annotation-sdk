Import Canvas Component to any file at the top of the element, over which you want to draw something.


```Import {Canvas} from 'sariska-annotation-sdk';

const MyComponent=() => {

  return(
  
    <div>
    
      <Canvas width={700} height={500} />
      
      <div style={{height: '500px', width: '700px'}} >
      
      </div>
      
    </div>
    
  )
  
}```


You can replace the div element with any Image, Iframe, Slide or any other element.

You can pass following attributes for the Canvs:

  width: number
  
  height: number
  
  color: string
  
  lineWidth: number
  
  zIndex: number
