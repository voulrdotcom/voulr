<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<div class="flex h-screen w-full items-center justify-center">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} />
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<T.Mesh castShadow>
			<T.BoxGeometry />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
	</Canvas>
</div>
