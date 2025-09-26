# ![](/dynamic-gesture/dynamic_gesture_asset.png){style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"} Dynamic Gesture Asset

Defines the behavior and integration of a custom hand gesture for use with the **Dynamic Gesture System**.
A `DynamicGestureAsset` encapsulates configuration for gesture playback, animation behavior, tracking control, and gesture override targets.

Once created, the asset can be installed and assigned to a `DynamicGesture` component to enable gesture functionality.

## Properties

### `GestureName`

The display name of the gesture.
Shown in the **Expression Menu**.


### `GestureIcon`

The icon associated with this gesture, displayed in the **Expression Menu**.


### `MotionType`

Defines the playback behavior of the assigned animation.

| Value        | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `BlendTree`  | Blends multiple animation clips based on `GestureWeight`.             |
| `MotionTime` | Plays a single animation at a frame corresponding to `GestureWeight`. |
| `Speed`      | Adjusts the playback speed proportionally to `GestureWeight`.         |


### `OverrideGestures`

Specifies which default VRChat gestures this asset will override.
The listed gesture types are replaced with the configured dynamic gesture behavior at runtime.


## Motion Types

### `BlendTree`

Plays multiple clips blended by the `GestureWeight` parameter.

* `GestureWeight` range: `0.0f` (open hand) ↔ `1.0f` (closed fist)
* Use when smooth transitions between multiple poses are required.

::: info
`GestureWeight` values:

0.0 → Open hand

1.0 → Closed fist
:::


### `MotionTime`

Plays a single animation at a normalized time based on `GestureWeight`.

* `GestureWeight` maps directly to the animation’s normalized time (0 → 1).
* Use for progressive gesture animations directly controlled by hand openness or trigger pressure.

::: info
Example: GestureWeight = 0.5 → The animation plays from the middle frame.
:::


### `Speed`

Plays a single animation at a speed scaled by `GestureWeight`.
::: info
`GestureWeight` = 1.0f → 100% playback speed

`GestureWeight` < 1.0f → slowed playback
:::
## Advanced Properties

### `TrackingType`

Specifies how hand tracking is handled when the gesture state is active.
A [`VRCAnimatorTrackingControl`](https://creators.vrchat.com/avatars/state-behaviors#animator-tracking-control) is automatically added to the state.

| Value       | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| `Tracking`  | Keeps VRChat finger tracking active.                        |
| `Animation` | Disables tracking, allowing animation to take full control. |

::: info Recommendation
Use `Animation` if the gesture animation should override finger tracking. Otherwise, tracking input may interfere with the animation.
:::


### `IntroAnimation`

Optional. Defines an animation to play **once** when entering the gesture state from a standard VRChat gesture.

* Can be assigned per incoming VRChat gesture.
* Play before the gesture animation begins.

**Use case:** Adding transition animations for a more natural gesture change.