import { artwork } from "/public/JS/firebase.js"

document.addEventListener("click", newImage)

let container= document.getElementById("scrollable-ctn")
let outputs= []

function newImage(){

    
  console.log(artwork.Giacomo.data)
  
  outputs.push(artwork.Giacomo.data)

    outputs.forEach(element => {
        
        let imgdata= document.createElement("img")
        
        imgdata.src= element
        document.body.appendChild(imgdata)
    })
}





    /*outputs.forEach(element => {
        const toDataURL = () => {
            const canvas = document.createElement('canvas');
    
            // We use naturalWidth and naturalHeight to get the real image size vs the size at which the image is shown on the page
            canvas.width = element.naturalWidth;
            canvas.height = element.naturalHeight;
    
            // We get the 2d drawing context and draw the image in the top left
            canvas.getContext('2d').drawImage(element, 0, 0);

            container.appendChild(canvas)
        }
    })*/


//{data: Uint8ClampedArray(328208), width: 292, height: 281, colorSpace: 'srgb', storageFormat: 'uint8'}
    
/*"image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAEZCAYAAAA+HVifAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQl4VcX5xt85NwkJ2SP7DiIRRBEQRdkE/lBQaVlURBRRFAWsbcVatUSslVoXQFHE1BUB60LdoO5SN9RqFaoIRdkpKDuEJSHJPfN/3ptzaUyBOZ65jTfX7zyPD8I9Z87MO9/85ptv5n5XoQZeecDHY4FOqUDIpvrvOY4+9Ze/VLWysmyKwebNm7FkyZJwr169QhkZGVZlPfzww+Vbtmw5o6ys7FMArlVh8rBBgdRLgVE3AY1a20m1FS1bfu327dtCNWnSWNmUtWDBAjRp0gQdO3a0KQarVq0qXrp06UPLli2bDmCdVWHV+LCVeNVYz++8ikCaD3TqDoSSLSox1HF0u4kT1fWTJiHLAkrz5s1DYWFheM6cOaHmzZtb1Ag45ZRTyj///HMBkpWKfh8mkK68CRjXGsj3+9Bh7luIli1nuzNnXqYGDhxoNabGjh1LG8Dll18Ox3EC1+n+++8vLiwsFCAFVvB7PBgFUg8glPQ9nqt6a6yBNHfu3FCzZs0saiRAshLvez8cayCNUQMHDrAGUpcuXTBmzBgB0vfuzx/oAQHSDyR8wr1WgBRvXWpF8x+qMQKkH0r5RHuvACneelSAFMMYkizZ4s28TfURIJkUqu7PBUgCpOq2uTh6nwApjjojUhUBkgAp3myyGusjQKpGsX29SoAkQPJlKIl5kwAp3vpVgCRAijebrMb6CJCqUWxfrxIgCZB8GUpi3iRAird+FSAJkOLNJquxPgKkahTb16sESAIkX4aSmDcJkOKtXwVIAqR4s8lqrI8AqRrF9vUqAZIAyZehJOZNAqR461cBkgAp3myyGusjQKpGsX29SoAkQPJlKIl5kwAp3vq1OoGUB+DYWJwOzwTmTQFaZQDBE8YAmOk4+sQLL1Rdu3dHSkpK4L756KOPsHjxYvfSSy918vLYzODX7373u/DGjRsnuK77OYBw8JIOPfklgP0xKCeeimgDIMe+QskjgEEXAt3r2RX3ORo1+ru+8MJuaNeundWYmj17Nlq1aoUePXpYNe+tt94qe+ONN97ZunXrbABfWRVW8fBGAN/EoJyjFmEl3ves3DHp6enLmjZtGgqFQvp7Pvud27/dvLlO/Tp1ELJIYBVRePNmp0FJiU5SStsIsdt1Udt1neRQyFXKpiRgXVmZU0/r3bWAMgVY6fQNcMdO4DEAu2z0jrdnc3JyHsrLyzs7LS3NKmPotm07MlJTa6empdW2mif37StSO3cmqfLyVK2UY9Vn5eWbleOkwXFyrcoJh/chHFZlQOoBgH/aXHuXAXvuAPa8blOKn2ftRo+fN/znHgJp5YYNG/LS09O/35NV7u7QoYO+9557nG7duyMpKXiKtgvOP1+3fe01dW1pKTItavQUgIcB9zHAaWpRDh89HcD9ADoB2sb9+zVw4CXglvXAIwkIpMfuuOOO4cOGDUu1SRlcUFCgi4uL1dixY9Vxxx0XuOdeeeUV3HrrXHfp0tEK6Gc5piYA6AzgUitIAre5QDGAsQ7QwgJuHwIo/AR4+Wag6LXAIvl80FI8n2+puC0CpC1btvDP7/Vg1ZuPP/5494EHHnB69uxpBaShQ4bodi+/rK4vLYVNVu157DIgPBcI2eWLjICIZUVM0gZIvwL2P5/AQJo+fTqBlJaZGXwqueGGG3RJSQnGjRun8vODp7BduHAhJk+e7X722RgF2GWMBMYC6AJgjKUFTPaANJ5AshhviwE88DGwUIB0JBUFSGb7EiCZNRIgmTUCBEhGlQRIRokgQDJrJEAyayRA8qGRAMkskgDJrJEAyayRAMmHRgIks0gCJLNGAiSzRgIkHxoJkMwiCZDMGgmQzBoJkHxoJEAyiyRAMmskQDJrJEDyoZEAySySAMmskQDJrJEAyYdGAiSzSAIks0YCJLNGAiQfGgmQzCIJkMwaCZDMGgmQfGgkQDKLJEAyayRAMmskQPKhkQDJLJIAyayRAMmskQDJh0YCJLNIAiSzRgIks0YCJB8aCZDMIgmQzBoJkMwaCZB8aCRAMoskQDJrJEAyayRA8qGRAMkskgDJrJEAyaxRPALpvFrAdAVYZefTfF6pOtlZWQqWWRXD+/YBqakIWSRnY1fsLS5GstZItaxPSTiMcsdBulKwTTC1D0AaLMUG4Kak6P1lZfs1cIB/9WN6h7unvLzcCYedkNZOOawyWDJHmE4GHKblDVwf1tFxkrNTU1NSk5NDVgk6Dx4shdZuJH2xY5F9tKysFOXlTMpYC0DwhIEV+jOpGoda8JTKLCUpSUfaFg7TIoNn1nJdtutgueOE9ymlSoLaUUW/OQeTk5Pv2LNnz6wjleNn/Iz8KTDzXiAreLOAtYA6F8B73oCzadj/Ae5UwDnRSmrgKsfR7a++Wl165ZWwSRr34osv4sknn3SnT5/uNGrUyKZpOOecczB9+nTYZDBkBa666qrwmWee6Zx99tkqKysrcMbAWbNmqUceWRPeto2JvlpatI3pmH8DgBkRT7Moh49eA6AvgJ+oCggEve7UFWnLL1RA86CFAFiEFi2ed2+99TzVs2dPP2PqiO+68cYb0bFjR5x//vkW9QHuueceNxwOq4suukjVr18/cFm07Y8++sgdNGgQunXrFrhtxcXFmDVr1v7HHnusoKio6B4rIA0DZj4FZNu4SKsAdAewGoBdvkigLeA+ADhMg24zHw1zHN1u4kT169/+FllZwXNGzps3D3/605/Cc+bMCTVrZpczsnPnzigsLESnTp2sZu0hQ4aEe/fu7Vx88cUqNzc3sEFOmTIF9933r/DWrQUO0CawQVbkmZ+ggUkK6BW4PhUPXqgrgHS+glXy4Rs1wEl/nAL4uwFBr7+iZcvZ7syZl6kBA+wyRo4dOxZdunTBmDFjrPp/8uTJrpcN02nRInjGyLlz5+LNN990R44cqfr1C56ed+fOnbjrrrv2zZo1KzZAejoGQOoGYE0MgHS8B6SelkAa6gHp+kmTrIFUWFgYnjt3rjWQCCICiWCyWUYMHjw4AqRRo0ZZA2nGjBUekPItgLTSA1JBDIA0wgPScEsg3VAJSMFT2AILPSCNUQMHxg+Q6JWMHz/eCkhz5sw5BKT+/fsH7v8dO3YIkEzznQDJpBBAD0mAZNJJgGRSSIBkUgiAAMkskgDJrJF4SGaNBEhmjQRIPjQSIPkQSZZsRpEESEaJxEPyIZEs2fyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqhRLIE0/PiNjfI5STuDcAwBKXBfrHSfpOCDsWGUejORUSmoMhGsB2qZOX5eUhOrWr4+s7GzXUSpwErNtu3Y5Bw8ccBrUqxdOSk4OXA57ddXq1aHGjRrp1LQ0ti1wWf/+979DTMyWkZ6unVAoeDlbtzpFxRnKxTEukBS4HNcthlJbQ0rVdYHagcupsPxNISBDA5kacAKXVV6+yXGcFOU4uVZtKy/f6SQnl6g6dXJ07dq1rbJhbtq0KZSWlqbz8lin4Na9bds2RymlcnJy3aSk4P2/a9c2p6ysTGVlHeOmptYKrLXrutixY7u7Y8fOm8vLd91xJIL5afGMQWefffmgQYNS2UAjCo9ww9atWzF1+nTcesstqFXLJssf8PvbbtPX/upXyibLI6s5a9Ys9Fq+HG3Ky60Svf1da3wG6BE0gKACec9NcV1c6jiwyzsJFGrt/lQp1dDGqgH8VWuU9+yle5x1NnJycgL3/5YtW/Dss09jwICBaN36OCuVHn/8MX3aaV1V27Ztrcp54YXndYMGDVSHDicjLY2Jg4NdX3zxORYs+KfeuJGZMG2S2AFazwEzcyrFdIbBL60XaqAulDotcJ/x7Vp/COBbrdQpAJpalvV6idav3wzsucsGSKOHDRt2z+OPP54dCgXPGbl69Wr06dMHy5cvt0oXy4acfPLJ7v333++cfvrpsKnTiOHDdfvXXlPXlJZa5R18CsAjgPso4DQNbkORJ08HMBNAR9iRZDgQ7gs4wwGVbVEnTmVf9+sXvmHqVKd169aBDfLrr7/GL3/5S33jjTeq7t3tBtvo0aM1bWno0KEqIyMjcOsKCgp0WVkZrrjiCnXssccGLueVV17B73//pLt06SgFBM+qWFEBpvjl4B9taQG3uUApgCscwMYq/wzgbRdgMrw+gfsf2A1g6n7goQKgaLoNkEYOGzZs5tNPP20FpFWrVjEnL9asWWMNJPnVEfPYGQyEewPOKEAFT2ALTAGwol+/cMF99zn5+cEzRq5cuRITJkzQBQUFqlcvuxS2I0aM0H379sXw4cNVZmamWYwj3CG/OuJHOnpsb7rASAUEzxgJ7ABw1z5gFoFkmVNbgHTUnpsHoBAIzwVCdhm1gU4VZaGz5Q8YCJDMg02AZNYIECAZVRIPySgRBEhmjQRIZo0ESD40EiCZRRIgmTUSIJk1EiD50EiAZBZJgGTWSIBk1kiA5EMjAZJZJAGSWSMBklkjAZIPjQRIZpEESGaNBEhmjQRIPjQSIJlFEiCZNRIgmTUSIPnQSIBkFkmAZNZIgGTWSIDkQyMBklkkAZJZIwGSWSMBkg+NBEhmkQRIZo0ESGaNBEg+NBIgmUUSIJk1EiCZNRIg+dBIgGQWSYBk1kiAZNZIgORDIwGSWSQBklkjAZJZIwGSD40ESGaRBEhmjQRIZo3iEUhTTz311Kt69epV2yI/G3bt2oU///nPzD2D5ORkP0oc8Z7HHntMDxs2TGVlZVmV88Lzz6P9mjVoGQ4jeKYnYDmAfwG6P6CCZ+epaMoTAM4CUMeqZcCLgO4MKCZ6cyzK+ghA6Ukn6Y7dulml+ti5cycWLVqErl27okmTJhY1Al5++WXNVCitWrWCjU2+++67Ojs7W+Xn5yM1NTVwnZhS5/33v9LffttOAbb5Hl4D0BDASYHrU/HgBxqoDaC9glX6wS8BbNMAk+HVt8iHxESaH5cAnxQAxXcfqXF+XjDznFq1Lk9PTraxa+zVGu8fOJDULz09nGSRmpUNebukJKlbaqqbXFFO4LSaHxw8GDq5Rw/UTk2lWoHLWbdpk7O/pMQ5rlmzcIplCtu3Pvgg1KVDBzcrPT1wfajRp8uWOW1atEBmBlO9Bm/bl6tWhdZvbqZcnRdWFml+XXcvSku/DKWktHEdJ8+qbQcPfhZKSmqqQ6G6Vm0rK/vScZw6KhSqx3SxgesUDm926tffp5o3b6jT0zOtUtguW/aPUHZ2nm7atJVVOWvXfuWkpdVWDRo0sbLtTZvWOUlJjqpfvwnTBVvVad26r9yNG1fdvHfvXqsUtpcNA6bfD2TaeBFrAZwDqI8BpFsMEA62boC+E3BOA3SSxTzCVLHtfv5zddU11yAzk/mZg13z589Xc+fOdWfOnKkaN24crBDvqb59+6q7774bHTp00I4TfA4Yfcklbo+ePR16kjk5OYHbNm3aNPXww+vD27df4wDBsyoCqwDcAGCilxfTRqarAPQA8FNVkVc76HUbgDIAzPR4rEU5r6uWLee7t98+QvXp0ztoZSLPXXvttapjx4646KKLtI33d+edd+rS0lJccsklTtOmTQO37ZlnnlEffPCBO3ToUPTs2dOPA3PY9u/evRv33XffgdmzZxcUFdlmjARmPg1k2wCJ5tgNwJoKIFldxwPuA4DTE3bO6FDH0e0mTlTXT5oEm+XfvHnzUFhYGJ47d26oWTM7l71Tp04sC507d4YNkAYPHhzu3bu3M2rUKJWbGzxn5JQpUzBjxorw1q0FDhA8YySwkulZNVCgALuMkcAIDfRFRVrV4BkjgRs0UAJgnALyLWxyIVq2nO3OnDlGDRw4IPCgZQXGjh2LLl26YMyYMVb9P3nyZLe4uBjjx493WrRoEbhtc+bMwZtvvumOHDlS9e8fPGNkLH91ZOQwAdJRO1SA5MfeBUh+VBIgmVUSIBk0EiCZjUg8JD8aiYfkx70UIAmQZMl2VBuQJZsJt7JkMykE+eVaHxLJL9f6EUl+udaokgDJKJEAyYdEAiQ/IgmQjCoJkIwSCZB8SCRA8iOSAMmokgDJKJEAyYdEAiQ/IgmQjCoJkIwSCZB8SCRA8iOSAMmokgDJKJEAyYdEAiQ/IgmQjCoJkIwSCZB8SCRA8iOSAMmokgDJKJEAyYdEAiQ/IgmQjCoJkIwSCZB8SCRA8iOSAMmokgDJKJEAyYdEAiQ/IgmQjCoJkIwSCZB8SCRA8iOSAMmoUiyBdOU5wJ13AFk26UfWA7gQwBuoyGNnc50FuHcDzvGW2RCvcRx9wvjx6qJLL0V6evCkKAsWLMD8+fPDf/zjH0MNGzLbX/BryJAhuOOOO9CmTZvghQC4+uqrw2eeeaYzYMAAlZERPI/lgw8+iDlzNoZ37BjrAM39fPfxCPVmRqxbNTBeAV2s2gZM9NKP9FVALYuypnp5gs5XQFOLct5G8+YvuQUFQ1X37t0tNAJuvvlmnHTSSTj33HMt6gPmHnK11uqCCy5Q9erVC1zWiy++iE8++cQ955xzVNeuXQO3raSkBI888sj+WORDmtYgI+PndWGV5RWlrovNWqvmoZAO3CpP1m+UUnW0hpcxMrDYGw8eVJkZGcjOytLKIhna7n37ULx3L+rVrYtQkk3KOGDdpk2qUd26SElJCZxUi4Ls2L6daVlV7dq1rdq2dfduHChLhsYxVtmnXLcUSu1USjFZXPB0sRWdvV1VTGtpGghuTeXl2xVzTjlOlrbJrFVevhdaH0BOThZq104LbI+Rlm3frGrVStOZmcFzWLGcPXuK+IfKyEhHKBQKbEv79u1GSclBpKdnIy0teL9prbF79263qGhvgevuuf1IIvnpzcsHDBgwbfq0aZlOKLiPtGH9eoy48EIme0Jaml2nnX322e7NBQXOKV26UOzABvDzCRN063feUZeXlVkljVsA4CnAnQqoBjYjBMAQAL8HcAKtKXDLgJ8D4S6AMxhQNpnHZwFY2717eHxBARN9Ba7S2rVrceutv9fjx49TTEBmc1133XWaubkHDhyobDzbqVOn6oMHS3HhhSOUTRKzt99+G/fe+4K7fPm5CrDzkIACACcCOM/SAu53gRIFjFCATRbTF7383D8DcEbg/gf2AHjoAPBUAbB3mg2QRg4bNmzm008/nW0z+FetWoVu3bqBCdFtjIgNkV8dMQ9n+dURs0byqyNmjeLxV0cESIZ+mwegEAjPBUJ2CWyBThVlobNlfEyAZB5sAiSzRgIkHxqJh2QWSYBk1kiAZNZIgORDIwGSWSQBklkjAZJZIwGSD40ESGaRBEhmjQRIZo0ESD40EiCZRRIgmTUSIJk1EiD50EiAZBZJgGTWSIBk1kiA5EMjAZJZJAGSWSMBklkjAZIPjQRIZpEESGaNBEhmjQRIPjQSIJlFEiCZNRIgmTUSIPnQSIBkFkmAZNZIgGTWSIDkQyMBklkkAZJZIwGSWSMBkg+NBEhmkQRIZo0ESGaNBEg+NBIgmUUSIJk1EiCZNRIg+dBIgGQWSYBk1kiAZNZIgORDIwGSWSQBklkjAZJZo3gE0p3N8/J+0aJFiySo4PmZSg4exNcrVzontG/vMkufzbVi+XKnabNmOj09XSuLOq1Ys8bJLivTDQBtU6OtZWXYk5SkWihlncXyX4DTDNC1gcBZ/qjtOkAxKW8eIqk+A5e1obRU7atdB/WbNEOtWrUCl3PwYDE2bvy3atCgITIyMgKXE2nbunUqMzMTubm5cBwncFmbN29QWivUqVPPqm179uxQO3fuRmlpXQDMPmlzrVeIpAusY1WOUt8qdrvWzPQZPPtoefkWpdQ+hEJMg5tpUacwgC2uUtsL9u7d9ccjKeSHMAX9lbrhCiBNWSQx/AbALVrjXqWsE5hep7UuUCqSCdFPA47U+LuUQofRo9GrTx8aZGAreve99/Deu+/qcePGIS8vz6ZKuOHGG3H1hAlo0qRJ4PrwwalTp7o9e/ZUHTp0UCkpKYHL+stzz+GVl3frPUWDANSzaNtmaP0YlBoKoG3g+vBBre/TSvVSwElW5QBPaoDZS3sqRFL0Br0+RZMmH+jRo3sxH7aFRsBDD/0JrVu3Ru/efYJWJvLc/PnP6rS02ujduzfTGAcu691338HXX3+tu3fvgfz8fKu2vfTSiyUvvPBSwd69e+62AdLoYcA9jwPZwZPFAqsBUOLlqOC/zXUy4M4CHCZCtclgfYHj6BMnTlTXXHcdOOMGvZ566ikmMHcfffRRp2lTm2TxwOmnn44HHngAHTp04OwftEoYPnx4uG/fvs7555+vcnJyApfDHxx44IGvw9u2/cYBjrMwyK8A/EoDNyigR+D6VDx4iQb6MeGv500ELa5AA2UALldA66CFAHgFLVvOc6dPv0T179/PQiNgwoQJOOWUUzB69GjYeP+33XabW1ZWhssvv9zKJp988km888477vDhw1WfPn0Ct23Pnj2YNm3a/sLCwoKioqLpNkAaOQyY+bQlkFYB6AZgTQyAdDzgPgA4PS2BNNRxdLuJE9X1kyYhKyt45ul58+ahsLAwPHfu3FCzZnY5Izt16sSy0LlzZysgDR48ONy7d29n1KhRikuboNeUKVMwY8aK8NatBQ5gM0OuBDBBAwUK6BW0Ot5zI7xfHRmugOATCXCDBkoAjFNAvkWdFqJly9nuzJlj1MCBAwIPWlZg7NixYM7xMWPGWPX/5MmT3eLiYowfP5650AO3bc6cOcyD744cOVL1798/cNti+TNIAiRDdwqQ/Ni7AMmPSgIks0oCJAGSeEhHtQHxkEwYEQ/JpBDkl2t9SCS/XOtHJPnlWqNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqiRAMkokQPIhkQDJj0gCJKNKAiSjRAIkHxIJkPyIJEAyqhRzIJ0JZATOPQBgG4B7QqHQYECnWGQwZMtfABQz6uQB2qZOb2nttOzRA02bN9fJSUmBs+GtWrUqksWw6+mnIyM9PXA5bNtLL77onNG9u87Ly4OjVOCyFi1ahFatWqnGjRsjOTk5cDlLli5VK1YCJSXHa7tMVnsAfOQlVWsYuD4Vlv+OAph3iqlegvebUv9QWjPvYEsN1A5cJ63Xq9zcjTj11GPRsKFd2xYvXqzq1KmD/Pw22ib94JIlS5CUFFLHHXccUlPTArdt/fp1KjU1RXfu3FnXq8eskcGu8vJyLFq06MDbb799c1FR0T1HKsXPeB7ZDDgtM5IJNfhVDGRvSUs7b+zFF6ckJ9mkVQPmzJ+vzxs0SKVaZHlkS1589VX02bYNGVpbZZ5cXlaGda6re6akqAyLlLqs05wDB3BWaiqOsUjOxnIWlJTo01NSVB3Lcj4sLUWoY1fd6oQONGw/9nJYI9m9eyc+/PBtdOx4Gho0aBzckAD87W+v6DZt2qnGjZtblfP3v7+nmzRprho3tsthtX79anz66Qa9Z08+QqFGgTViYw4efB2O0xDJySdata209CPtONlISmprVZ9w+N+oVWvZvtzcfR/Vrp3GLHuBrx07drjbt29fUF5e/roNkOoACJ7f9T9vPiY9Pf2dJUuW5Nik1GRxvXv3du+8806HycxCoeCcvGLMGN3pb39To0pLrbJYPg/gScC9F3AaBe6uigcHALgTAM3RxpIuB8K9AeengLJJYTYDwMZ+/cITJk9moq/AVVq9ejUmTZqkf/GLX6iuXbtaqXT11VfrXr164eyzz7ZKz3r77bdrZuUcMWKEskms99Zbb+Huu59zv/iCCeOYDtfmuh7AyQBGWFrANBcoV8DFCmhoUaFPADz2OfD63UDJIouCoo8WAdhrA6QY1CFSBIG0csuWLfzTqkz51RGzfPKrI2aN5FdHzBoBiwE88DGw8Gag6DU/T9jcY0nz7/VqAZIPuToBKATQGUDwjNqAAMkstgDJrJEAyYdG4iGZRRIgmTUSIJk1EiD50EiAZBZJgGTWSIBk1kiA5EMjAZJZJAGSWSMBklkjAZIPjQRIZpEESGaNBEhmjQRIPjQSIJlFEiCZNRIgmTUSIPnQSIBkFkmAZNZIgGTWSIDkQyMBklkkAZJZIwGSWSMBkg+NBEhmkQRIZo0ESGaNBEg+NBIgmUUSIJk1EiCZNRIg+dBIgGQWSYBk1kiAZNZIgORDIwGSWSQBklkjAZJZIwGSD40ESGaRBEhmjQRIZo0ESD40EiCZRRIgmTUSIJk1SnggvfHGG8ekpaX5UeKI9wwZMkRPnDhR1a9fH8oiIdrdd92F9p99hjPLy5FqUaN3AbwN6PGAYvIom4vZcCZ4uRBtUjHcBbg9ANURUDbJrP4CoLxfP3f0L37B7JOBq7Ru3Tow/xBzGLVr185GIsyYMUN37dpVMR9WkkWyv3nz5unU1FTF3ErM0hj0+vTTT/HMM4v1mjW9AHQIrFHF+x8EcByAPpb5kJ5zASaLG6yAjKBNA7AWwPzETD+Sm5v7VufOndOZFMvmWvL++y06NGgQSnacwKk5+f6lW7Y4LerU0dmhkFUq3M1796IsNdVpnJzs2uXCBD7atMlpX7eum5GSYiMRVuzcqRpnZiLLIn0tK7Bq1y6latdGvYYNdS2LOu0/cAArV3+j0jNb6tTUbKu2bd36L5WZWR9pablW/b9r12rlOOnIyKirbRJVBjisAAAgAElEQVT9HTiwVSUlHVQpKce4QG2rtm3btkylpuYgM7OJVdt2796EXbtQHA4fswtILgleqYMANq0Btk5LtHxIyXXq1GEiRDsaAXB37HjiDq3bnAQ4wfNFAr92HOSPHq0uHD1a22SxfPXVV7FgwQI9+eabVb369YP3PYCLLrpI/fa3v9XHH3+8lfd3/fXXu6eccoozcOBAZGYGzxn5yCOPqPXz57uX7NqlmMU66LVBa9zq1sZyPQ1Ax6DFeM8VADgFQH8Awb1tpe6H1mEAwwA0sajTe6plyzfc6647W5122mkW5YA/qhDxIAcPHqxtvP+nnnq29Jln/vLihg1bngRqbbKqFMIHgfAmoGinXTnmpy3dS/ML/hd35AEfzwc69QBCNh7JUMfR7SZOVNdPmoSsrKzAVZ03bx4KCwvDc+fODdmkQmUFuAwpLCxE586dYeNJDh48ONy7d29n1KhRKjc3N3DbpkyZghUzZoQLtm518i2y6q4EMAoZ+mMsVACXNjbXCA30BcCUscFhC9ygAToP4xSQb1GhhWjZcrY7c+YYNXDgAKsxNXbsWHTp0gVjxoyx6v/777+/uLCw8KFly5ZNB7DOonHV+qiVeNVa00ovEyCZlRcgmTUSIPnRqHrvESCJh3RUixMPyc+AFA/Jj0p+7hEgCZAESLJk88OKarlHgCRAEiAJkKoFNn5eIkASIAmQBEh+WFEt9wiQBEgCJAFStcDGz0sESAIkAZIAyQ8rquUeAZIASYAkQKoW2Ph5iQBJgCRAEiD5YUW13CNAEiAJkARI1QIbPy8RIAmQBEgCJD+sqJZ7BEgCJAGSAKlaYOPnJQIkAZIASYDkhxXVco8ASYAkQBIgVQts/LxEgCRAEiAJkPywolruqbFAygdOzgWsck9+ppST0aKFannssVapUDdt3oyNGzfqDiedpGzT8374wQdod8IJkfxMNgm6li9dqjNyc1XDRo2QnJwc2Ji+Xr0aBzZu1MeWlSmbRKj7AXyOEPagM4C8wPXhg8nJKxAOZ8N16wEInhFLqVXQuhwAU8+lB66T1luQmrpZt23bRNWtWzdwOXzwyy+/QG5ujtu0aVOrBG3r1q1zN2zY8FBRUdFdkg/JqkvMD+cAPfcCwTOq/ecV558HnDsESLNJPPo2gFcBdyLg2Jkj8CsAvwDQ3DKj8h+Vck/SWvUErEDyNIDNnTq5w6+8UjVqxBzNwa5NmzbhwQcf1MOHD1ft27cPVoj31LRp03SHDierbt3OQGpq8GzoTzzxhC4vL1cDBgxAo0aNAtfpk08+wbx5i/Tq1f2YYi+wRhUVuF87zhuzlFKvA2A6y8BXOBz+N7MQA9gXuJBqftBSvGqu7X9eZ50Gl0UlAb/5DXDjdUCmDd2eBFAIhOcAoWaWktB/+JOX5NWmkUOAcB/AuQhQwfNFAn8A8K9+/cKTZsxw2rRpE9heVq5ciauvvlpPmjQpklTf5ho5cqTu27cvzjvvPGWTnvfGG2/UBw8exFVXXaXatGkTuEp//etfMXnyE+6SJZcqwC5jJHClBh4dB7iPMFtz4Er950Hm5rbKzx2DOvguIrCB+X5DHN+YBFz/G2DS9ZZAmucBaW4MgNSpoqzIwsYGSPIzSGbDi9OfQSKQrgTCsQKSWYg4ukOAJEA6qjlOAbCiX79wwX33Ofn5+YHthR7ShAkTdEFBgbWHNGLEiIiHxOWfjYckQIojEnlVCWxg8deU718j8ZDMmgmQzBotXLgQkyfPdj/7bEwMlmxjxUMyS56YdwiQzP0qQDJrJEAya+T3DvGQZMkmS7Zx41R+fvCfQRIg+cWN+T4BkgBJgCRAMpOimu4QIAmQBEgCpGrCjfk1AiQBkgBJgGQmRTXdIUASIAmQBEjVhBvzawRIAiQBkgDJTIpqukOAJEASIAmQqgk35tcIkARIAiQBkpkU1XSHAEmAJEASIFUTbsyvESAJkARIAiQzKarpDgGSAEmAJECqJtyYX/OjB9Jg4Nq2QGbwvIPAP4GkZWlpSacppW0SvbG7XgZCpwFuHqBtOucdQDUEVAtAp1jkw/msrMwpbdRIn9Cxo87MCJ4zcndRERZ/8oVzwokn67r16lnl51m8+H2nQYMGaN68hU5KSgpc1pIl/1BKOap16zY6IyMjcDnffLNJLV26DTt2nFQGNLFKqga8lAwsnSDpR8zwSrg7QsD5LYHjQzZ5UAFsB9rntWjRZ8iQIZmZGRk2HMFDjz+uBp9zjq5bp46V3s8+/zx6nHEGGtSrB6jgVXrn/ffhfvYZOh04gGyLGm3XGs+5tdU3zvlaKebDDH6Fwy/AcU6CUq2CF8LsZ+6bUCoPSrUFkBa4LKawDYc/2q/1jpeBlJWBC4o8+K0D7FkA4JMYJWizq041Px3cUqu5ov+j19W3zIMWrdZp7du3v3v27NktGzZsaJNXDf3798fdd98Npnl1LDKGX3bZZeEBAwY4Z511lsqw8GzuvfdebHjkkfDV27c7LYHA9rIawM+RoZditgJOt+zOCRroA+AsZQMS4A+6okkjFWCT65MMuuffwN9uAoretGwcHy8CwDTkP7orsIH96JQ6eoNPOfHEE594+eWX85s0aWIFpE6dOqGwsBCdO3e2AtLgwYPDvXv3dkaNGqVyc4MnsZ0yZQpWzJgRLti61cm3ABKH7Chk6I+xUAF2KWyBERroC2C4AjItTPEGDZQA1r86sgzAlLXAW1cD2162qNCP/lEBUmxMQIBk0FGAFBtDS/RSBEix6WEBkgBJPKQYjCUBUgxEBCBAEiAJkGIwlgRIMRBRgGQWUZZsZo3kDosgpYj3HQXEQxIPSTykGEBBPKQYiCgekllE8ZDMGskd4iHFygbEQxIPSTykGIwm8ZBiIKJ4SGYRxUMyayR3iIcUKxsQD0k8JPGQYjCaxEOKgYjiIZlFFA/JrJHcIR5SrGxAPCTxkMRDisFoEg8pBiKKh2QWUTwks0Zyh3hIsbIB8ZDEQxIPKQajSTykGIgoHpJZRPGQzBrJHeIhxcoGIh7STTfdlF+nTh2r9CPjxo3DsGHD0LhxYyiLxGoPP/yw27lzZ+eEE05ASkpK4Ha+9tpr2PvOO+6Ze/c6NinjtgCYgzSsx1gArQPXp+LB2Rpor4CTACRblPWqBloo4EwAORbl7GHr1gIfSPoRCxX5qHhIlgJ6j5/StGnT69u2bVu/Vq1aViW+u2hR5zOzs9Oyk5MDp1RlBRbv2OGckJWFnIpyApf1+Z49zjHNm6v6WVlukuMELqeouBj/WLvBqdO4o87Orhu4HLbt668/curUaY6cnIZaqeBt++ab1WrjxtL9xcW5a4BapIrFtWo/8M2dwO63LQr50T8qQIqNCeRlZ2e30FrbTNeRmpTs3fvEQ1q3bgMoG1frBqXcrlo7/wcgeCZs4FEAu/r10xeMG0evLbC9rF+/HlOnTsWll16Kjh07Wql+882TceqpXdC3b1+kpQVPPbtgwV/dZ575y6KvvlrzKJC81qpSkYf1amDvdvtyfrwlBDawH69k/9uWJwOffgB07GQJpMFAuDfgjAJU8HyRwBQAK/r1Cxfcd5+Tn58f2F5WrlyJCRMm6IKCAtWrl13GyBEjRmjCaPjw4SozM3jGyNmzZ4cLCwvnfvjhh7cDsMyF/b+1ix9L6YEN7MciUHW3U4BkVlyAZNaopt4hQIqznhMgmTtEgGTWqKbeIUCKs54TIJk7RIBk1qim3iFAirOeEyCZO0SAZNaopt4hQIqznhMgmTtEgGTWqKbeIUCKs54TIJk7RIBk1qim3iFAirOeEyCZO0SAZNaopt4hQIqznhMgmTtEgGTWqKbeIUCKs54TIJk7RIBk1qim3iFAirOeEyCZO0SAZNaopt4hQIqznhMgmTtEgGTWqKbeIUCKs54TIJk7RIBk1qim3iFAirOeEyCZO0SAZNaopt4hQIqznhMgmTtEgGTWqKbeIUCKs54jkN4EOrYFLPJFAqOAcHfAGQAom3xIDwLYcOaZ4Stvuslp3rx5YHtZu3Ytbr31Vj1+/HjVpUsXK9Wvu+46PWjQIHXWWWfBJiHec889F3788ccl/YhVb8T24cAGFttqSGlRBWoDH/4EOCHbUpIPatVKrZecnFQfQMiirBWlpSjLy0Pr/HzUrl07cEl79+/HZ8vXqBbHHq/z8vICl8MHV6xYqo49tllp48aNyhzHcYMWtnHjRr1ixYr5mzdvvlPyIQVVMbbPCZBiq6d1aVnAQBew5RFqZWdf9rOhQ7uf0a1bWnp6euB6Pf/889jy2mvukD17VH2LlMffAHgAmXoVrlXA8YHrwweTkh4tTUr6ZE4oVLZYKVVsU1hJScmG8vLyZQCKbMqRZ2OjgAApNjrGXSnHHHPM/bfccsvFI0eOzMrNDZ4zcsqUKVgxY0a4YOtWJ98CSLH91ZErDgALfgVs+TOAvXEnvlQosAICpMDSxfeDAqT47h+p3eEVECAlqGUIkBK0YxO8WQKkBO1gAVKCdmyCN0uAlKAdLEBK0I5N8GYJkBK0gwVICdqxCd4sAVKCdrAAKUE7NsGbJUBK0A4WICVoxyZ4swRICdrBAqQE7dgEb5YAKUE7WICUoB2b4M0SICVoBwuQErRjE7xZAqQE7WABUoJ2bII3S4CUoB0sQErQjk3wZgmQErSDBUgJ2rEJ3iwBUoJ2sAApQTs2wZslQErQDhYgJWjHJnizBEgJ2sEE0hlnnHF+fn5+pk2a1/fffz9p5+efO6cUF6scC612aY1Xy1LVt+7PSoGmgbM8VlRhUTnw9URgu+RDsuiTeHxUgBSPvRKDOuXk5PwsJSWljVIq2aa4oqKiTm3btj2zT58+eXm5uYHtZf/+/Xjm2RfK1qz5dnY4nLzWpk4Vz+7/ENj3D0nQZq9kPJUQ2MDiqRFSl8MqkGmZTjta6M8GDx58Y0FBwXGtWrVygmq9fft2XHXVVfs//PDDCw4cOPB+0HKqPLcfQFmMypJi4kABAVIcdEKcV2HQsGHDptx+++3tjjvuuMC/F7Bt2zZcfPHF+xYvXnzOvn373onzNkv1fiAFBEg/kPA16LUCpBrUWTW9qgKkmt6D//v6C5D+9xrLGzwFBEhiCiYFBEgmheTzmCkgQIqZlAlbkAApYbs2/homQIq/Pom3GgmQ4q1HErg+AqQE7twYNU2AFCMhpRizAgIks0Y/9jsESD92C6jG9guQqlHsGvoqAVIN7biaWG0BUk3steqtswCpevX+Ub9NgPSj7n5fjRcg+ZJJboqFAgKkWKiY2GUIkBK7f+OqdQKkuOqOuKyMACkuuyUxKyVASsx+jWWrBEixVFPKOqoCAiQxEJMCAiSTQvJ5zBQQIMVMyoQtKAKkAQMG5Ofl5QXOh1RcXIx77733wIoVK34q6UcS1lasGyZAspYw4QsY1KlTp3NycnLyQqHA6ZAiIn3xxRfhnTt33lZaWros4VWTBgZSQIAUSLYf1UMtAWQDiJWtrJK0sz8q+/lejY2VkX2vl8rNooAoIAocTgEBktiFKCAKxI0CAqS46QqpiCggCgiQxAZEAVEgbhQQIMVNV0hFRAFRoEYDSWvd4gi/PbZOKRU2da/Wmj/Gmgug8vmaEgDf+nneVH6sPtdaZwHIA7ATwD6llOUvv8aqZrEtR2t9DIDD/Z7cPrZdKWX8DTatdQMA6VVqRt2K4qxP6wFIBbBdKXUgtkrW3NJqOpB+C4BG3LAKVMYqpfYcrVu01jSGcwH08wyDt68HwF9VnaOU4iD4wS+tdS0APwXwEwBPAvhAKUVoJtyltR4I4BQArQDUrtRA/rDkfKXUN4Y+JYyuBNDOu499uAvAXwF8rJTiD0v+4JfWmjAa7dntE0qpJT94peKkAjUdSIMBnATg+iqzYgOl1JYjaex5Rv0B/ApAZwD8uenPAdzvAen9eBj0nmfUB8A1AJoCmAjgDaVUcZzYT0yrobXu4MFoMgD+f/QiiG9RSn19lD49DsAl3kBvTC8XwJsACLP3AKxWSh2MaYUDFKa15rmukQCGA1gD4Dal1CcBikrIR2o0kNgjWutuABYC4PIrepmARIMYBYDGwf+WA3gAwNzqnkW11jx0yKXnV1VBo7Vu5A2wrgB4uvlhenHxtPT4X4wKrfUrAAb4BZLWmjBif54M4DQAaQCe9fRaUt0A96DDJeKOqvporbsDuAgAl+EveBMMvTi5Ynj69gcT0wPSbQAyvFmV3o4JSJxxuew50Xvm957xbqnu+IzWejyAfAB/rLok0VqzTfyMyzZ6fBv8xFF+sM6I0Ys9IHGC4dKNy5ujekhaay7TCKIkAGcCKAfwG05UPwCMOgEYwWWiUurtwwCJ3hsnGtaRsU6BUSWRarSH5AUwr660XBvrxR6OCCSt9cWeQfArDHcD2A2AUPhEKUUjqbZLa023/SpvSXHv4WbUaqtMjF6ktSZASwFsDrJE0lrTG5wJ4DUAjCnR6zkikLTWrQEMArDRWwp1AfAigOlKKfZxtV2eZ8TlNet0l1Lq3Wp7eYK8qKYDiQHQ2z2wMBZ0kwenwwLJg9ENAH4NYAiACz1jnwRgq1JKH2ZG4/KOQVLOvncopbhjc8TL89gYKH+J3yelR6O1vgDAq0opwo/LTIKI3tnPADCuQSgtrQpErXUTb5B9xXiIUmpv9MXeZ6w/Bx3jSnu11sO8AfygUmqToZ6nAvg/73tqXDpwaWMdLNdac6OA9fzItLFwuPpprdmHDGgzrsL/Zz0PCyStNWF1OZe7ABhXIwxSAFwH4PXDAVFrXd/rey7V3wDwoWmZrrWmztw4eZGQ01r39Tzsf3LzwwtSc+OB8b4zKgFx3WHsqTcALtteUUr9o/LnWuteAHp4df9Ya027Yx8x1vSuUqrI0KeMqZ4OYKVnE4R0jbpqOpCGAqBXxAF/BQAGQ7nl+19A8mB0GYC/cbAAmOcFs6cCuKfKYOcOHA2hrWdkNIieXlyCn/Fr74srB5i11tw1aeMNIBrBdG+pxUHDev7Zm/kJmZu98rksoVHOB8BdQcay+HcuP2icxwLoCGAKgAUcOJ7RRj/jztvzHFTedjlByEHBf/uU71RKbati9AwWc0Cxbdxir+u9lztQtIfNAJ462qbAkSxca81JgTp9AICD9XsBztv25/J7NgBuhT90JCB53vEvPW+EsTVuUjCORA1/pZRi+w9dHojO8WKGXDLRThj45iDnZLOdMR2l1Gpv0mBbCAcCjIOc/cLgOHfyzue84tkb30cYjfP6ivWmd/cxAE4K1ILlUxd6TvyT9jRNKfWFd3SF/8Y4GEHFeCLbw35jXzFGSsBz04U7cn+v0i7GIFnP5gC4XKR9sg5cClJ/LvdfUkrRXuP+qulA4szJNjCGwP8OCyRvV42A4IxFABE2j3oDmYOdy7XIGRfvOAA9L8YgGJR8B8BbXmfTq7nWO2LA8rgsiBwv0FpzcBR4xveYt1tHw7jVM2LO+PQeaCCEBkHK8ugF/NuzFHo7DF7TEAkwDhy+e5xSaoP3nqjHQFjR4J/zoMKBxF0oasDZ/zN6gEopzpaRS2vN+AWPStD4F3hgpgEzTvMHz6gJ7GuUUvQ6fF9aa3om9PRY1sNKqf/yDkyFeZ4IoULNuGV/WCB576IOXNJxgP7T84rozbJfZimlCJhou3mGi/bBAU+o8D/2WzMAYzx7+IJlKKU4WVGr9gDoTXM5SA0LvaUoPaCzvV1PBqepI5eZhBT/nfV51QsFEHbc0ucExgmL3hwBcpVS6ulKfRL9jDDiZELt2IdsF8FJz5d/53OsR7Rd9CQJWbabdeQSkXZQx/t3Psf/v1YpRXuP+6vGAsnzFO7yvAfuyvzicEDSWnPmoJfCADE7jIOYIKN7y501bicfcoW11vRm+BkN+hkObKUUYyI0UhrUHd5yggOYy5LoZ/Rq2Ok8y7TUgwODmr/z3H0azK1Kqa1aa86mXF7wHRcppfjMdy6tNWdEGuMtNNLK56K01jRytonPMd7CNnEg8O8cUPTUCKoCpVTEbdda0yOiF0lgcFfy5Wi7tdbHe23lzg89lGePttzydv8YcCbMohcHPWFCPfhueh+8CJYvK3ughxsVWmsuibj85hKWsT3ulB0JSIwTEaqENAftWd4RDmoyXCnFGFJ00BLc9GDoaRDuPM8U8Rq11vyMEwIH7r3Ukv1T6VnCnd4LdWV/EPIECiFFQNyulFpUCfT0PNkfPMf2nWC11po2xfJY598ppVhWtI6sH/uZ3vDjABZ5Hg7voafG5+jJ0vOjtqw7QUNPmbuR9KBmK6WoRfQzrhoYXyXcaOMR0Mb7VZOBxEFFyAxmbEZrzbjQdzwkzzPi4KdX8idvkNAw2ancjePSibN55KSstyVL0HApQ/hw2XEo0O3t/tB74j0PVYEEZ9qfe8b0pTdL8iAfBwkHFwfmvzwgPOgtm/iO56qe1NVan+BtCTPmxAFGFz9qvIwrcBalwdOL4dkpxp9KPej8xfPgeDYrcmbJ+3fWjzMx68hYyKHTwVprnm9i3IUAvdHk3WitCQAuf7mciV7sC0KCSz8OuuhyjTM2B+4hT+0IQOLyk/DmJMBByaXtfwHJixvRG+GSiIAhtLlLyn/jodbxSikuk9ifXF6x3dzIeIQTRuWNA601P+NERu+Yg/1QEFprTeDe6NWVOnMS4LKN3g49K3on/HfqyKUyvWP2Mb07xnsOnSr3Ykz0prh5wuU5QwQRYGutCRp6OPR06GXyuMIzXDJ7nzF+NcGDIc8sLdNa8930xuhlE5a07YgNeGVyick+5STEdnOpd8hjjGco1WQgcZbjYLzTG3SHAxLdbg5MntTlICzRWnMwc0BxeUND/Tx6rkdrTWPhUoBLrqlVg4haa4KBwdNLPc+pMqwISBoxvTYexlt7uF07L/BMoDGecKJSijGI71xeYJdLQw5MBtIPxYG01lxG0Nj4Pn7OE8iRg5Jaa7aVn9ED5DGCyOFQD9ZcstBz47LkO8sprTVndQ4Yzqh/MX2VQWvNZQu9BJ6S58U/qTWXm1XP3tBD4+wdWXIe6dJa8/1cgnEpQ9DQezkckO70lulclq3RWhMG9C7oNXGC4UQRqYMXfOZnhMhEpRRjbYcurTUByAnrvsMs89jHhBUhzQmMdhLZlKhSBpdZ7BNuVHC5S2+E3lTl99DLYr9Qp1necYToUp/LSE4GhCf7dJ5SimCNnrHjcwQ/ocMY1x6tNQ/JciOGz9LL5zOH6uZNGFFvjN4mNywisIr3q0YCSWvN2ZQzKWeCf/HsUFUPyRM+uuPDIOM27z4ubxhkpGEQOpGdK60140ocyIznEFQs99D34bydMhouZ/whhzkzRMDRO+CMFqnT4Tpfa81BT2Ph4B0VXVJF7/WWopxluQRkOxdX8dI449Eb+KM3iCK7flprGj3LJSy4BHjb2+HjcoxxFZ7P4XOvVTZOzyvkQGZgtG/UuzDAg14Jly7UkRe9NnobXLLSO6x8cSDwe2hHHBDewUZ6D5ztOfjZBwTcd4Dkfe+QIHzdA/FBrTXP/LDdXHb/PBr09ZZjjGkRdNzAoFcSjdVRL04eBBKXUpcppeiZVIYIy6RnwnseOxKkPe+Tyz16hwxGE76V38ONC7aNdSFw2BdrKk2C3Gnlu2g7jG9yN5U7d9SXkwjrQPvlZ4wx0hNl/xJUBC9thd8siNiq9xw9b9oZd3o5YR91xzWeIFVTgcSO5yzPnYrocus7HpJ3OI33cHeBX2DUWmu6xvSq6OnQUFdGwaG15kzDrx5wdvtZ5ViC19H0ehhknkbPpMpyjTMcYxGE0rDKBlnFyAlQejHcEaKLz+Xid7Zytdac0RiL4SD6QxXviLEOBtsZ9KY3waVBxEvTWhNQXJJxCXBqdJfJCxTTaBnzOF0pxaVO5YHHmBGXX/Qc+b7vbbzeMopBfZ6l+t7fy/LidvRaOcm853m8/EpQZSAxBsL4EnfPlnv3UAfG4ggVgprvj9Rfa81Byz7hzhPbz6MQlQPdXCIRBAT6TZV35bTW3GzgZ9R4jFLqqSMNWu9gK22Py3HGwHiMoPJyjZ4e4478k94dd7wi36nzlmTUjTDn0QvaFr/iEvaAyQ0XxjQ5EdLWN3v/zrqd54UH6JEdOj7gnYVie6kN4ceY2aHjIvEEn8PVpcYBSWvNwUpDO6PymaAqHtIMzz2+uooryyUZZ1gGwTkrHjpTpLXmYKAREwicVSKg8Nb/9FYIQQaOaaCVl1AMEvPfuSzgs5xND2sAlbwjbhlz1uRp3kPfS/O+u0bXnPU4jdvCVeAR9Y64pJxSaUnGYDSByoEZ/Swao2Agm8sWQph1j+yeaa0ZJ2Osih4APRzG4r6zVe7XeL1YDDMmcLAd8TuEhyvPC2YTzpzhCZTIYUatdWUg0euipgQUY27R81z0jtg2QpiDlF/9iQSTPY+W/8a4DmFNz5CeB+M0bC8nH04MUa8m6mnS++PERQ+Ens4NR/uumdZ6rud5RpfJBFPk0lozTskQAJforBfhwWVz9HMeIiU0uOwjfBhWYB35HGOVnCw4CfL5yMaG1pobFgwLMDbJJTvtLbIE95ZyBDvHCP+NdhwJdNeUqyYCiW4odyM6HAVIjFcwBsOzO9FAH9fhHKzcCaExsoMPfdmyEpA4G/2eQPLcXw5yrtlZHmMKnHEqQyTq1jM+cUU0WFnVALxv7dOToqETfvfQBa+yHOOykbMod5x6K6UqGzehw2A4XfxuVQybxwg4CzMQ/JPKMQytdRRIHFxcIq706sLgPo2ey1p6NQTcUeM8R/ESCBTGnv4rHmYaCB54qAWhc3d0x7EKkAgVLqm4zGYsh0s1goVxHnqM9BDoXTBWEunTSkDi3+m5vOx5WIzdcXeKBxS55CFQPo2emdJac/Kh18KtfHrT9Ib/6ztplTwcQpLxK0Ljycq7a95uJCcexpfoYfP0dkQjDzp8jiDi5EdYRbxLD9Jc4hG49AwJlsgvtVQCEgklnRoAAALWSURBVHffnvC8bMbSGJ8iYOmFE9CMw9HGD1t3U7/8UJ/XKCB5W/g0ILq851fZro8u2egJ0JC49RoN9kbPm3Dm4P83q7o0qQQkPs8BxhmNEKBhMuDI5RKNhLtFPIEdNfzoEQIGR7ldftjcNl5Mg/XiQOAA5I4Od6L+XsmFp/FyVo/untGDiqRB8QK0hBVnz3MrnxPyvsvF5xgMZYCaS0dutR+oBCTOtIQnIcddR8ZoGPfg4ORZGp634hLwqGlbjuDlcHAwLvK9vpflfVePu0XsF251s88i2+6VgMRjG/zWPtvFIxiEEeMoHHjUnBMMYVxYZQeN297UhDE0TkSM37BvOLmw7ZzUCAC2mzGY6Hu5FIr2ASH3jyMd8PSOb9Du6B2zb+lhMg620dv15LvZ19ztosY88MmdW+6Isj9Yf3rsDJzzyEEkm4H39RvGjOglst4MltOz4oRBPegh0YumZ84yaZM8dsE20fujt0k9qRu/jP2DZznwC7gaASRv+55rYg4eDlrGArhs4/H76IHG6NdB2EEMLHJHjYFBPseALzufYOHSIpr6gcYRfZ6BXXowvDhbR47re1uxDBKyo2m8jLVwG5Vf1eCShwbHgHD7o313yjvrw9mUMzDBwbJ5LOC+SudiokDikoQ7g9wp47klHmikd8Z6cEnHYHzlZWP0UCjhRU+AszA9lh1aaw54zt6sK5eAPIlNQ6bHxDMsDJxzMHIZyxm8Wr5uoLXm4OFApRfAP6ktB/UyLxjPwcjlDAc4l1WRb+17KUrYF+xDwp2TBoPpHLgES/SMET+jTdBm+G/UmgciebaHEKOnSUDxiAA9kKVaay7XuJXOuBS9j++cSzqM10sb5DEK1oGeDAFHHTnJcHkVBRI9UcKKHl40aE3dGeuhB38omF0FSIQun2O/MbBNL5w2zbQ5hDhtmZBifzPQz1UAvUaGEVgX2gq/snTUr5z4hUV13Pf/3I1jgIIdowkAAAAASUVORK5CYII="*/