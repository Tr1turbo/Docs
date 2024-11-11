# Quantization Parameters Creator

Quantization Parmetars Creator is a non-destructive tool that create binary parameter to reduce sync parameters.

[**Binary Parameters**](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary) refers to a parameter system that [VRCFaceTracking](https://docs.vrcft.io/) uses to send tracking data through a collection of **Bool** parameters that represent a float parameter.



![EyeLid](/qpc_eyelid.png)

## Resolution Settings
Users can set the resolution for each parameter. Higher resolution requires more sync parameters. The number of required sync parameters can be viewed in the `Parameters: {num} bits` section⁠⁠.

## Combined Parameters
Some parameters have `Combined Remote` and `Combined Local` options, indicating that these parameters can be merged for simplification. 
For example, *EyeLidLeft* and *EyeLidRight* can be combined into *EyeLid*, with its value being the average of *EyeLidLeft* and *EyeLidRight*⁠.

- **Combined Remote:**
Only combines parameters remotely. Selecting this option can halve the sync parameter requirements⁠.
- **Combined Local:**
Only combines parameters locally. Selecting this option does not affect sync parameter requirements⁠.

## Scale Factor
Scale Factor can be used to adjust parameter values according to user needs. For example, if a user feels that the eyes don't open wide enough, they can increase the Scale Factor for EyeLidLeft and EyeLidRight⁠.